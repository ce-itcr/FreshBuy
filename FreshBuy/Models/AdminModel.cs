using FreshBuy.src;
using FreshBuy.src.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace FreshBuy.Models
{
    public class AdminModel : DataRequests
    {
        //Producer Management

        /// <summary>
        /// Find all producers in file
        /// </summary>
        /// <returns></returns>
        public string[] find_producers()
        {
            return READALL(producer_path);
        }


        public string[] find_affiliations()
        {
            return READALL(affiliations_path);
        }
        /// <summary>
        /// Method that creates a producer entity
        /// </summary>
        /// <param name="person_id"></param>
        /// <param name="name"></param>
        /// <param name="last_name"></param>
        /// <param name="province"></param>
        /// <param name="canton"></param>
        /// <param name="district"></param>
        /// <param name="birth_date"></param>
        /// <param name="phone_number"></param>
        /// <param name="sinpe_number"></param>
        /// <param name="delivery_locations"></param>
        /// <returns></returns>
        public bool create_affiliation(int person_id, String name, String last_name, String province, String canton, String district, String birth_date, double phone_number, double sinpe_number, String delivery_locations, String username, String password)
        {
            if (SELECT(affiliations_path, person_id) == null)
            {
                Producer producer = new Producer();

                producer.person_id = person_id;
                producer.name = name;
                producer.last_name = last_name;
                producer.province = province;
                producer.canton = canton;
                producer.district = district;
                producer.birth_date = birth_date;
                producer.phone_number = phone_number;
                producer.sinpe_number = sinpe_number;
                producer.delivery_locations = delivery_locations;
                producer.username = username;
                producer.password = password;

                INSERT(affiliations_path, JsonConvert.SerializeObject(producer));

                return true;
            }
            return false;
        }

        public bool create_producer(int person_id, String name, String last_name, String province, String canton, String district, String birth_date, double phone_number, double sinpe_number, String delivery_locations, String username, String password)
        {
            if (SELECT(producer_path, person_id) == null)
            {
                Producer producer = new Producer();

                producer.person_id = person_id;
                producer.name = name;
                producer.last_name = last_name;
                producer.province = province;
                producer.canton = canton;
                producer.district = district;
                producer.birth_date = birth_date;
                producer.phone_number = phone_number;
                producer.sinpe_number = sinpe_number;
                producer.delivery_locations = delivery_locations;
                producer.username = username;
                producer.password = password;

                INSERT(producer_path, JsonConvert.SerializeObject(producer));

                return true;
            }
            return false;
        }

        public void find_affiliation(int person_id)
        {
            Debug.Print(SELECT(affiliations_path, person_id)); 
            INSERT(producer_path, SELECT(affiliations_path, person_id));
        }

        /// <summary>
        /// Method that updates a producer entity
        /// </summary>
        /// <param name="person_id"></param>
        /// <param name="name"></param>
        /// <param name="last_name"></param>
        /// <param name="province"></param>
        /// <param name="canton"></param>
        /// <param name="district"></param>
        /// <param name="birth_date"></param>
        /// <param name="phone_number"></param>
        /// <param name="sinpe_number"></param>
        /// <param name="delivery_locations"></param>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public bool update_producer(int person_id, String name, String last_name, String province, String canton, String district, String birth_date, double phone_number, double sinpe_number, String delivery_locations, String username, String password)
        {
            if (DELETE(producer_path, person_id))
            {
                return create_producer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number, delivery_locations, username, password);
            }
            return false;
        }

        /// <summary>
        /// Method that deletes a producer entity
        /// </summary>
        /// <param name="person_id"></param>
        /// <returns></returns>
        public bool delete_producer(int person_id)
        {
            if (SELECT(producer_path, person_id) != null)
            {
                DELETE(producer_path, person_id);
                String[] associated_products = FILTER(producer_path, "person_id", null, person_id);
                JObject product_to_analyze;

                foreach (String products in associated_products)
                {
                    product_to_analyze = JObject.Parse(products);
                    UPDATE(products_path, (int)product_to_analyze["product_id"], "category_id", null, 0);
                }
                return true;
            }
            return false;
        }

        public bool delete_affiliation(int person_id)
        {
            return DELETE(affiliations_path, person_id);
        }

        //Category Management

        /// <summary>
        /// Find all categories in file
        /// </summary>
        /// <returns></returns>
        public string[] find_categories()
        {
            return READALL(categories_path);
        }

        /// <summary>
        /// Method that creates a category entity
        /// </summary>
        /// <param name="category_id"></param>
        /// <param name="category_name"></param>
        /// <returns></returns>
        public bool create_category(int category_id, String category_name)
        {
            if (SELECT(categories_path, category_id) == null)
            {
                Category new_category = new Category();

                new_category.category_id = category_id;
                new_category.category_name = category_name;

                INSERT(categories_path, JsonConvert.SerializeObject(new_category));

                return true;
            }
            return false;
        }

        /// <summary>
        /// Method that updates a category entity
        /// </summary>
        /// <param name="category_id"></param>
        /// <param name="category_name"></param>
        /// <returns></returns>
        public bool update_category(int category_id, String category_name)
        {
            if (SELECT(categories_path, category_id) != null)
            {
                UPDATE(categories_path, category_id, "category_name", category_name, 0);
                return true;
            }
            return false;
        }

        /// <summary>
        /// Method that creates a category entity
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public bool delete_category(int category_id)
        {
            if (SELECT(categories_path, category_id) != null)
            {
                DELETE(categories_path, category_id);
                return true;
            }
            return false;
        }

        public bool delete_product(int product_id)
        {
            if (SELECT(products_path, product_id) != null)
            {
                DELETE(products_path, product_id);
                return true;
            }
            return false;
        }

        /// <summary>
        /// Method that creates a new type of product
        /// </summary>
        /// <param name="product_id"></param>
        /// <param name="product_name"></param>
        /// <returns></returns>
        public bool add_products_to_stock(int product_id, String product_name, int category_id, String category_name)
        {
            if (SELECT(products_list_path, product_id) == null)
            {
                JObject new_product_to_stock = new JObject();

                new_product_to_stock["product_id"] = product_id;
                new_product_to_stock["product_name"] = product_name;
                new_product_to_stock["category_id"] = category_id;
                new_product_to_stock["category_name"] = category_name;

                INSERT(products_list_path, JsonConvert.SerializeObject(new_product_to_stock));

                return true;
            }
            return false;
        }

        //Report View
        public String[] bestselling_products(String[] products) { return null; }
        public String[] bestprofitable_products(String[] products) { return null; }
        public String[] bestselling_products_by_producer(String[] products, int id) { return null; }
        public String[] customers_withmost_purchases(int id) { return null; }

    }
}