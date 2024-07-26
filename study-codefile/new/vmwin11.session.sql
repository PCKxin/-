-- 修改client2024表account增加唯一值约束
-- alter table client2024 add constraint unique_account unique(account);
-- 去除唯一值约束
alter table client2024 drop constraint unique_account;

