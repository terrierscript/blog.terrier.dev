---
templateKey: blog-post
title: administrateで新規リソース追加時new_resourceに、既存データをコピーして使う
date: '2018-04-05T18:05:45+09:00'
tags:
  - ruby
  - administrate
---

何かlog的なデータで、最新のデータを使いまわして上書きしたい時のパターン
今のところcontrollerを生やして上書きするしか無さそう

```ruby
module Admin
  class SomeController < Admin::ApplicationController
    def new
      resource = new_resource
      authorize_resource(resource)
      render locals: {
        page: Administrate::Page::Form.new(dashboard, resource),
      }
    end

    private

    def new_resource
      # 最新データ
      copy = resource_class.order(created_at: :desc).first
      return copy if copy.present?     
      resource_class.new
    end
  end
end
```

---

ちなみに、下記Pull Requestにて`new_resouce`を参照するものが提案されている
https://github.com/thoughtbot/administrate/pull/1097/files

これが入れば、newをcontrollerに生やさなくても良くなる可能性が高い
