using FreshBuy.src;
using FreshBuy.src.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FreshBuy.Models
{
    public class LoginModel : DataRequests
    {

        /// <summary>
        /// Accept or deny a user's login: PRODUCER
        /// </summary>
        /// <param name="person_id"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public bool producer_login_approval(int person_id, String password)
        {
            if (SELECT(producer_path, person_id) != null)
            {
                JObject current_producer = JObject.Parse(SELECT(producer_path, person_id));
                if ((String)current_producer["password"] == password)
                {
                    return true;
                }
                return false;
            }
            return false;
        }

        /// <summary>
        /// Accept or deny a user's login: CONSUMER
        /// </summary>
        /// <param name="name"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public bool consumer_login_approval(String username, String password)
        {
            String[] consumers_list = FILTER(consumer_path, "username", username, 0);

            if (consumers_list.Length == 1)
            {
                if ((String)JObject.Parse(consumers_list[0])["password"] == password)
                {
                    return true;
                }
            }
            return false;
        }
        public bool admin_login_approval(String username, String password)
        {
            String[] consumers_list = FILTER(admins_path, "username", username, 0);

            if (consumers_list.Length == 1)
            {
                if ((String)JObject.Parse(consumers_list[0])["password"] == password)
                {
                    return true;
                }
            }
            return false;
        }

    }
}