﻿using FreshBuy.Models;
using FreshBuy.src;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FreshBuy.Controllers
{
    [EnableCors(origins: "http://localhost:4200/", headers: "*", methods: "*")]
    public class ConsumerController : ApiController
    {
        ConsumerModel consumer_model = new ConsumerModel();

        [HttpPost]
        [Route("api/Consumer/Buy")]
        public IHttpActionResult ConsultConsumerCart([FromBody] JObject[] cart_client_data)
        {
            Debug.Print(cart_client_data[0].ToString());

            consumer_model.purchase(cart_client_data);

            return Ok(cart_client_data);

        }

        [HttpGet]
        [Route("api/Consumer/getProducts")]
        public string[] getProducts()
        {
            string[] result = consumer_model.find_products();

            return result;
        }

        [HttpPost]
        [Route("api/Consumer/getProduct")]
        public IHttpActionResult getProduct([FromBody] JObject product_id)
        {

            return Ok(consumer_model.findProduct((int)product_id["product_id"]));

        }

        [HttpPost]
        [Route("api/consumer/consumer/update")]
        public IHttpActionResult UpdateConsumer([FromBody] JObject consumer)
        {
            {
                bool result = consumer_model.update_consumer(
                                    (int)consumer["person_id"],
                                    (string)consumer["name"],
                                    (string)consumer["last_name"],
                                    (string)consumer["province"],
                                    (string)consumer["canton"],
                                    (string)consumer["district"],
                                    (string)consumer["email"],
                                    (string)consumer["username"],
                                    (string)consumer["password"]);

                if (result)
                {
                    return Ok(consumer);
                }
                return NotFound();
            }
        }

        [HttpPost]
        [Route("api/consumer/consumer/delete")]
        public IHttpActionResult DeleteConsumer([FromBody] JObject consumer)
        {
            {
                bool result = consumer_model.delete_consumer(
                    (int)consumer["person_id"]);

                if (result)
                {
                    return Ok(consumer);
                }
                return NotFound();
            }
        }

        [HttpPost]
        [Route("api/consumer/comment/add")]
        public IHttpActionResult AddComment([FromBody] JObject comment)
        {
            {
                bool result = consumer_model.add_comment(
                    (int)comment["producer_qf"],
                    (int)comment["app_qf"],
                    (int)comment["producer_id"],
                    (string)comment["comment"]);

                if (result)
                {
                    return Ok(comment);
                }
                return NotFound();
            }
        }
    }
}
