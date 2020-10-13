using FreshBuy.src;
using FreshBuy.src.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace FreshBuy.Models
{
    public class ConsumerModel : DataRequests
    {
        //Consumer Management

        /// <summary>
        /// Method that creates a consumer entity
        /// </summary>
        /// <param name="person_id"></param>
        /// <param name="name"></param>
        /// <param name="last_name"></param>
        /// <param name="province"></param>
        /// <param name="canton"></param>
        /// <param name="district"></param>
        /// <param name="email"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public bool create_consumer(int person_id, String name, String last_name, String province, String canton, String district, String email, String username, String password)
        {
            if (SELECT(consumer_path, person_id) == null)
            {
                Consumer consumer = new Consumer();

                consumer.person_id = person_id;
                consumer.name = name;
                consumer.last_name = last_name;
                consumer.province = province;
                consumer.canton = canton;
                consumer.district = district;
                consumer.email = email;
                consumer.username = username;
                consumer.password = password;

                INSERT(consumer_path, JsonConvert.SerializeObject(consumer));

                return true;
            }
            return false;
        }

        /// <summary>
        /// Method that updates a consumer entity
        /// </summary>
        /// <param name="person_id"></param>
        /// <param name="name"></param>
        /// <param name="last_name"></param>
        /// <param name="province"></param>
        /// <param name="canton"></param>
        /// <param name="district"></param>
        /// <param name="email"></param>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public bool update_consumer(int person_id, String name, String last_name, String province, String canton, String district, String email, String username, String password)
        {
            if (DELETE(consumer_path, person_id))
            {
                return create_consumer(person_id, name, last_name, province, canton, district, email, username, password);
            }
            return false;
        }

        /// <summary>
        /// Method that delete a conumer entity
        /// </summary>
        /// <param name="consumer_id"></param>
        /// <returns></returns>
        public bool delete_consumer(int consumer_id)
        {
            return DELETE(consumer_path, consumer_id);
        }

        //Purchase
        public bool create_purchase(int id, String[] products, String delivery_location) { return true; }

        public bool purchase(JObject[] cart_client_data)
        {

            for (int i = 0; i < cart_client_data.Length; i++)
            {
                //Debug.Print((string)cart_client_data[i]["product_id"]);
                int current = (int)(JObject.Parse(SELECT(products_path, (int)cart_client_data[i]["product_id"]))["availability"]);
                int amount = (int)cart_client_data[i]["amount"];
                UPDATE(products_path, (int)cart_client_data[i]["product_id"], "availability", null, current - amount);
            }

            return true;
        }
        public string[] find_products()
        {
            return READALL(products_path);
        }
    }
}