using FreshBuy.src;
using FreshBuy.src.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;

namespace FreshBuy.Models
{
    public class AdminModel : DataRequests
    {
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
        public bool create_producer(int person_id, String name, String last_name, String province, String canton, String district, String birth_date, double phone_number, double sinpe_number, String[] delivery_locations, String username, String password)
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
        public bool update_producer(int person_id, String name, String last_name, String province, String canton, String district, String birth_date, double phone_number, double sinpe_number, String[] delivery_locations, String username, String password)
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
            if(SELECT(producer_path, person_id) != null)
            {
                String[] associated_products = FILTER(producer_path, "person_id", null, person_id);
                JObject product;

                foreach(String products in associated_products)
                {
                    product = JObject.Parse(products);
                    DELETE(products_path, (int)product["product_id"]);
                }
                DELETE(producer_path, person_id);
                return true;
            }
            return false; 
        }

        //Category Management
        public bool create_category(int id, String name) { return false; } 
        public bool update_category(int id, String name) { return false; }
        public bool delete_category(int id) { return false; }

        //Report View
        public String[] bestselling_products(String[] products) { return null; }
        public String[] bestprofitable_products(String[] products) { return null; }
        public String[] bestselling_products_by_producer(String[] products, int id) { return null; }
        public String[] customers_withmost_purchases(int id) { return null; }
    }
}