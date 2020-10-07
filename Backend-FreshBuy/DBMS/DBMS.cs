using Backend_FreshBuy.DBMS.Entities;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using System.Transactions;

namespace Backend_FreshBuy.DBMS
{
    class DBMS : DataRequest
    {
        /*------------------------------------------------------------------------------------Administration View Module------------------------------------------------------------------------------------*/
        //Producer Management

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
        public bool create_producer(int person_id, String name, String last_name, String province, String canton, String district, String birth_date, double phone_number, double sinpe_number, String[] delivery_locations, String password) { 
            if(SELECT(producer_path, person_id) == null)
            {
                Producer producer = new Producer();

                producer.person_id = person_id;
                producer.name = name;
                producer.last_name = name;
                producer.province = province;
                producer.canton = canton;
                producer.district = district;
                producer.birth_date = birth_date;
                producer.phone_number = phone_number;
                producer.sinpe_number = sinpe_number;
                producer.delivery_locations = delivery_locations;
                producer.password = password;

                INSERT(producer_path, JsonConvert.SerializeObject(producer));

                return true;
            }
            return false;
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
        /// <returns></returns>
        public bool update_producer(int person_id, String name, String last_name, String province, String canton, String district, String birth_date, double phone_number, double sinpe_number, String[] delivery_locations, String password) {
            if(DELETE(producer_path, person_id))
            {
                return create_producer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number, delivery_locations, password);
            }
            return false; 
        }

        /// <summary>
        /// Method that deletes a producer entity
        /// </summary>
        /// <param name="person_id"></param>
        /// <returns></returns>
        public bool delete_producer(int person_id) { 
            if(SELECT(producer_path, person_id) != null)
            {
                String[] associated_products_by_producer = FILTER(producer_path, "person_id", null, person_id);
                JObject product;

               foreach(String associated_products in associated_products_by_producer)
                {
                    product = JObject.Parse(associated_products);
                    DELETE(producer_path, (int)product["product_id"]);
                }
                DELETE(producer_path, person_id);
                return true;
            }
            return false ;
        }

        //Category Management

        /// <summary>
        /// Method that creates a product category
        /// </summary>
        /// <param name="id"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        public bool create_category(int id, String name) {
            if (SELECT(categories_path, id) == null)
            {
                JObject new_category = new JObject();

                new_category["id"] = id;
                new_category["name"] = name;

                INSERT(categories_path, JsonConvert.SerializeObject(new_category));

                return true;
            }
            return false;
        }

        /// <summary>
        /// Method that updates a product category
        /// </summary>
        /// <param name="id"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        public bool update_category(int id, String name) {
            if(SELECT(categories_path, id) != null)
            {
                UPDATE(categories_path, id, "name", name, 0);
                return true;
            }    
            return false; 
        }

        /// <summary>
        /// Method that deletes a product category
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public bool delete_category(int id) { 
            if(SELECT(categories_path, id) != null)
            {
                DELETE(categories_path, id);

                String[] products_to_modify = FILTER(products_path, "category_id", null, id);
                JObject product_to_analyze;

                foreach(String product in products_to_modify)
                {
                    product_to_analyze = JObject.Parse(product);
                    UPDATE(products_path, (int)product_to_analyze["product_id"], "category_id", null, 0);
                }
                return true;
            }
            return false; 
        }

        //Report View
        public String[] bestselling_products(String[] products) { return null; }
        public String[] bestprofitable_products(String[] products) { return null; }
        public String[] bestselling_products_by_producer(String[] products, int id) { return null; }
        public String[] customers_withmost_purchases(int id) { return null; }

        /*------------------------------------------------------------------------------------Producer View Module------------------------------------------------------------------------------------*/
        //Affiliation Process
        public bool create_membership_affiliation(int id, String name, String last_name, String province, String canton, String district, String birth, double phone_number, double sinpe_number,
            String[] delivery_locations, int affiliation_id)
        { return true; }
        public String find_membership_affiliation(int id) { return null; }

        //Products Management
        public bool create_product(int product_id, int id, String name, String category, String sale_mode, int availability, int price) { return true; }
        public bool update_product(int product_id, int id, String name, String category, String sale_mode, int availability, int price) { return true; }
        public bool delete_product(int product_id) { return true; }

        //Orders Management
        public String[] find_order(int id) { return null; }
        public String complete_order(int id, String msj) { return null; }


        /*------------------------------------------------------------------------------------General Public Web View Module------------------------------------------------------------------------------------*/
        //Client Register and Login
        public bool create_consumer(int id, String name, String last_name, String province, String canton, String district, String birth, double phone_number, double sinpe_number,
            String[] delivery_locations, String password) { return true; }
        public bool update_consumer(int id, String name, String last_name, String province, String canton, String district, String birth, double phone_number, double sinpe_number,
            String[] delivery_locations, String password)
        { return true; }
        public bool delete_consumer(int id) { return true; }

        //Purchase
        public bool create_purchase(int id, String[] products, String delivery_location) { return true; }


    }
}
