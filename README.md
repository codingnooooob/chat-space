# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## userテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|nickname|text|null: false, foreign_key: true|
|email|text|null: false, foreign_key: true|
|password|text|null: false, foreign_key: true|

### Association
- has_many :users_groups
- han_many :users_comments


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|group_name|text|null: false, foreign_key: true|

### Association
- has_many :groups_comments
- has_many :users_groups


## commentテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|text||
|image|text||

### Association
- belongs_to :groups_comments
- belongs_to :users_comments


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :group
- has_many :user


## groups_commentsテーブル

|Column|Type|Options|
|------|----|-------|
|comment_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :comment


## users_commentsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|comment_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

[](
あああ
)