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

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|nickname|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups,through: :users_groups
- has_many :users_groups
- has_many :comments


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|

### Association
- has_many :comments
- has_many :users,through: :users_groups
- has_many :users_groups


## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|text|text||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## users_commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user|references|null: false, foreign_key: true|
|comment|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user