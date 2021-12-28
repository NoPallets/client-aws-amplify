import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  uuid: any;
  jsonb: any;
  numeric: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars["date"]>;
  _gt?: Maybe<Scalars["date"]>;
  _gte?: Maybe<Scalars["date"]>;
  _in?: Maybe<Array<Scalars["date"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["date"]>;
  _lte?: Maybe<Scalars["date"]>;
  _neq?: Maybe<Scalars["date"]>;
  _nin?: Maybe<Array<Scalars["date"]>>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars["jsonb"]>;
  _eq?: Maybe<Scalars["jsonb"]>;
  _gt?: Maybe<Scalars["jsonb"]>;
  _gte?: Maybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars["String"]>>;
  _in?: Maybe<Array<Scalars["jsonb"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["jsonb"]>;
  _lte?: Maybe<Scalars["jsonb"]>;
  _neq?: Maybe<Scalars["jsonb"]>;
  _nin?: Maybe<Array<Scalars["jsonb"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _append?: Maybe<Products_Append_Input>;
  _delete_at_path?: Maybe<Products_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Products_Delete_Elem_Input>;
  _delete_key?: Maybe<Products_Delete_Key_Input>;
  _inc?: Maybe<Products_Inc_Input>;
  _prepend?: Maybe<Products_Prepend_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _append?: Maybe<Products_Append_Input>;
  _delete_at_path?: Maybe<Products_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Products_Delete_Elem_Input>;
  _delete_key?: Maybe<Products_Delete_Key_Input>;
  _inc?: Maybe<Products_Inc_Input>;
  _prepend?: Maybe<Products_Prepend_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars["numeric"]>;
  _gt?: Maybe<Scalars["numeric"]>;
  _gte?: Maybe<Scalars["numeric"]>;
  _in?: Maybe<Array<Scalars["numeric"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["numeric"]>;
  _lte?: Maybe<Scalars["numeric"]>;
  _neq?: Maybe<Scalars["numeric"]>;
  _nin?: Maybe<Array<Scalars["numeric"]>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/**
 * Table storing the products
 *
 *
 * columns and relationships of "products"
 */
export type Products = {
  __typename?: "products";
  cover_photo?: Maybe<Scalars["String"]>;
  date: Scalars["date"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  images?: Maybe<Scalars["jsonb"]>;
  price?: Maybe<Scalars["numeric"]>;
  sold: Scalars["Boolean"];
  title: Scalars["String"];
  user_id?: Maybe<Scalars["uuid"]>;
};

/**
 * Table storing the products
 *
 *
 * columns and relationships of "products"
 */
export type ProductsImagesArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: "products_aggregate";
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: "products_aggregate_fields";
  avg?: Maybe<Products_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: Maybe<Products_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Max_Order_By>;
  min?: Maybe<Products_Min_Order_By>;
  stddev?: Maybe<Products_Stddev_Order_By>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Order_By>;
  sum?: Maybe<Products_Sum_Order_By>;
  var_pop?: Maybe<Products_Var_Pop_Order_By>;
  var_samp?: Maybe<Products_Var_Samp_Order_By>;
  variance?: Maybe<Products_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Products_Append_Input = {
  images?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: "products_avg_fields";
  price?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Products_Bool_Exp>>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Products_Bool_Exp>>>;
  cover_photo?: Maybe<String_Comparison_Exp>;
  date?: Maybe<Date_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  images?: Maybe<Jsonb_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  sold?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductPkey = "product_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Products_Delete_At_Path_Input = {
  images?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Products_Delete_Elem_Input = {
  images?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Products_Delete_Key_Input = {
  images?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer column in table "products" */
export type Products_Inc_Input = {
  price?: Maybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  cover_photo?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  images?: Maybe<Scalars["jsonb"]>;
  price?: Maybe<Scalars["numeric"]>;
  sold?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: "products_max_fields";
  cover_photo?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  price?: Maybe<Scalars["numeric"]>;
  title?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  cover_photo?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: "products_min_fields";
  cover_photo?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  price?: Maybe<Scalars["numeric"]>;
  title?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  cover_photo?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: "products_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** ordering options when selecting data from "products" */
export type Products_Order_By = {
  cover_photo?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  images?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "products" */
export type Products_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Products_Prepend_Input = {
  images?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CoverPhoto = "cover_photo",
  /** column name */
  Date = "date",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Images = "images",
  /** column name */
  Price = "price",
  /** column name */
  Sold = "sold",
  /** column name */
  Title = "title",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  cover_photo?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  images?: Maybe<Scalars["jsonb"]>;
  price?: Maybe<Scalars["numeric"]>;
  sold?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: "products_stddev_fields";
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: "products_stddev_pop_fields";
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: "products_stddev_samp_fields";
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: "products_sum_fields";
  price?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  price?: Maybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CoverPhoto = "cover_photo",
  /** column name */
  Date = "date",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Images = "images",
  /** column name */
  Price = "price",
  /** column name */
  Sold = "sold",
  /** column name */
  Title = "title",
  /** column name */
  UserId = "user_id",
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: "products_var_pop_fields";
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: "products_var_samp_fields";
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: "products_variance_fields";
  price?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  price?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** query root */
export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** query root */
export type Query_RootProducts_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  email: Scalars["String"];
  id: Scalars["uuid"];
  password: Scalars["String"];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = "users_email_key",
  /** unique or primary key constraint */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  password?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  password?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  password?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Password = "password",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  password?: Maybe<Scalars["String"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Password = "password",
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type AddProductMutationVariables = Exact<{
  title: Scalars["String"];
  price: Scalars["numeric"];
  cover_photo?: Maybe<Scalars["String"]>;
  images: Scalars["jsonb"];
  user_id: Scalars["uuid"];
}>;

export type AddProductMutation = { __typename?: "mutation_root" } & {
  insert_products_one?: Maybe<
    { __typename?: "products" } & Pick<Products, "id">
  >;
};

export type AddUserMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type AddUserMutation = { __typename?: "mutation_root" } & {
  insert_users_one?: Maybe<{ __typename?: "users" } & Pick<Users, "id">>;
};

export type GetProductQueryVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type GetProductQuery = { __typename?: "query_root" } & {
  products_by_pk?: Maybe<
    { __typename?: "products" } & Pick<
      Products,
      | "description"
      | "id"
      | "price"
      | "sold"
      | "title"
      | "date"
      | "images"
      | "user_id"
    >
  >;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = { __typename?: "query_root" } & {
  products: Array<
    { __typename?: "products" } & Pick<
      Products,
      | "id"
      | "title"
      | "price"
      | "sold"
      | "date"
      | "description"
      | "images"
      | "cover_photo"
    >
  >;
};

export type GetProductsByUserQueryVariables = Exact<{
  user_id: Scalars["uuid"];
}>;

export type GetProductsByUserQuery = { __typename?: "query_root" } & {
  products: Array<
    { __typename?: "products" } & Pick<
      Products,
      | "id"
      | "title"
      | "price"
      | "sold"
      | "date"
      | "description"
      | "images"
      | "cover_photo"
    >
  >;
};

export type MyQueryQueryVariables = Exact<{
  email: Scalars["String"];
}>;

export type MyQueryQuery = { __typename?: "query_root" } & {
  users: Array<{ __typename?: "users" } & Pick<Users, "id" | "password">>;
};

export const AddProductDocument = gql`
  mutation AddProduct(
    $title: String!
    $price: numeric!
    $cover_photo: String
    $images: jsonb!
    $user_id: uuid!
  ) {
    insert_products_one(
      object: {
        title: $title
        price: $price
        cover_photo: $cover_photo
        images: $images
        user_id: $user_id
      }
    ) {
      id
    }
  }
`;
export type AddProductMutationFn = Apollo.MutationFunction<
  AddProductMutation,
  AddProductMutationVariables
>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      title: // value for 'title'
 *      price: // value for 'price'
 *      cover_photo: // value for 'cover_photo'
 *      images: // value for 'images'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAddProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddProductMutation,
    AddProductMutationVariables
  >
) {
  return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(
    AddProductDocument,
    baseOptions
  );
}
export type AddProductMutationHookResult = ReturnType<
  typeof useAddProductMutation
>;
export type AddProductMutationResult =
  Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<
  AddProductMutation,
  AddProductMutationVariables
>;
export const AddUserDocument = gql`
  mutation AddUser($email: String!, $password: String!) {
    insert_users_one(object: { email: $email, password: $password }) {
      id
    }
  }
`;
export type AddUserMutationFn = Apollo.MutationFunction<
  AddUserMutation,
  AddUserMutationVariables
>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserMutation,
    AddUserMutationVariables
  >
) {
  return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(
    AddUserDocument,
    baseOptions
  );
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<
  AddUserMutation,
  AddUserMutationVariables
>;
export const GetProductDocument = gql`
  query GetProduct($id: uuid!) {
    products_by_pk(id: $id) {
      description
      id
      price
      sold
      title
      date
      images
      user_id
    }
  }
`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductQuery,
    GetProductQueryVariables
  >
) {
  return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    baseOptions
  );
}
export function useGetProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductQuery,
    GetProductQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    baseOptions
  );
}
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<
  typeof useGetProductLazyQuery
>;
export type GetProductQueryResult = Apollo.QueryResult<
  GetProductQuery,
  GetProductQueryVariables
>;
export const GetProductsDocument = gql`
  query GetProducts {
    products {
      id
      title
      price
      sold
      date
      description
      images
      cover_photo
    }
  }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    baseOptions
  );
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    baseOptions
  );
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<
  typeof useGetProductsLazyQuery
>;
export type GetProductsQueryResult = Apollo.QueryResult<
  GetProductsQuery,
  GetProductsQueryVariables
>;
export const GetProductsByUserDocument = gql`
  query GetProductsByUser($user_id: uuid!) {
    products(where: { user_id: { _eq: $user_id } }) {
      id
      title
      price
      sold
      date
      description
      images
      cover_photo
    }
  }
`;

/**
 * __useGetProductsByUserQuery__
 *
 * To run a query within a React component, call `useGetProductsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsByUserQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetProductsByUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductsByUserQuery,
    GetProductsByUserQueryVariables
  >
) {
  return Apollo.useQuery<
    GetProductsByUserQuery,
    GetProductsByUserQueryVariables
  >(GetProductsByUserDocument, baseOptions);
}
export function useGetProductsByUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsByUserQuery,
    GetProductsByUserQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetProductsByUserQuery,
    GetProductsByUserQueryVariables
  >(GetProductsByUserDocument, baseOptions);
}
export type GetProductsByUserQueryHookResult = ReturnType<
  typeof useGetProductsByUserQuery
>;
export type GetProductsByUserLazyQueryHookResult = ReturnType<
  typeof useGetProductsByUserLazyQuery
>;
export type GetProductsByUserQueryResult = Apollo.QueryResult<
  GetProductsByUserQuery,
  GetProductsByUserQueryVariables
>;
export const MyQueryDocument = gql`
  query MyQuery($email: String!) {
    users(where: { email: { _eq: $email } }) {
      id
      password
    }
  }
`;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useMyQueryQuery(
  baseOptions: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>
) {
  return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    baseOptions
  );
}
export function useMyQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>
) {
  return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    baseOptions
  );
}
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = Apollo.QueryResult<
  MyQueryQuery,
  MyQueryQueryVariables
>;
