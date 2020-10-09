using FreshBuy.Models;
using FreshBuy.src;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FreshBuy.Controllers
{
    [EnableCors(origins: "http://localhost:4200/", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        LoginModel login_model = new LoginModel();
        AdminModel admin_model = new AdminModel();
        ConsumerModel consumer_model = new ConsumerModel();


        [HttpPost]
        [Route("api/Login/Producer/consult")]
        public IHttpActionResult ConsultProducerLogin([FromBody] JObject login_producer_data)
        {
            bool result = login_model.producer_login_approval(
                (int)login_producer_data["person_id"],
                (string)login_producer_data["password"]);

            if (result)
            {
                return Ok("Login successful" + login_producer_data.ToString());
            }
            return BadRequest("Incorrect user or password");
        }

        [HttpPost]
        [Route("api/Login/Consumer/consult")]
        public IHttpActionResult ConsultConsumerLogin([FromBody] JObject login_consumer_data)
        {
            bool result = login_model.consumer_login_approval(
                (string)login_consumer_data["username"],
                (string)login_consumer_data["password"]);

            if (result)
            {
                return Ok("Login successful" + login_consumer_data.ToString());
            }
            return BadRequest("Incorrect user or password");
        }


        [HttpPost]
        [Route("api/Login/Admin/consult")]
        public IHttpActionResult ConsultAdminLogin([FromBody] JObject login_admin_data)
        {
            bool result = login_model.admin_login_approval(
                (string)login_admin_data["username"],
                (string)login_admin_data["password"]);

            if (result)
            {
                return Ok("Login successful" + login_admin_data.ToString());
            }
            return BadRequest("Incorrect user or password");
        }

        [HttpPost]
        [Route("api/Login/Producer/add")]
        public IHttpActionResult CreateProducer([FromBody] JObject new_producer)
        {
            {
                bool result = admin_model.create_producer(
                    (int)new_producer["person_id"],
                    (string)new_producer["name"],
                    (string)new_producer["last_name"],
                    (string)new_producer["province"],
                    (string)new_producer["canton"],
                    (string)new_producer["district"],
                    (string)new_producer["birt_date"],
                    (double)new_producer["phone_number"],
                    (double)new_producer["sinpe_number"],
                    new_producer.SelectToken("delivery_locations")?.ToObject<string[]>(),
                    (string)new_producer["password"]);

                if (result)
                {
                    return Ok(new_producer);
                }
                return NotFound();
            }
        }


        [HttpPost]
        [Route("api/Login/Consumer/add")]
        public IHttpActionResult CreateConsumer([FromBody] JObject new_consumer)
        {
            {
                bool result = consumer_model.create_consumer(
                    (int)new_consumer["person_id"],
                    (string)new_consumer["name"],
                    (string)new_consumer["last_name"],
                    (string)new_consumer["province"],
                    (string)new_consumer["canton"],
                    (string)new_consumer["district"],
                    (string)new_consumer["email"],
                    (string)new_consumer["username"],
                    (string)new_consumer["password"]);

                if (result)
                {
                    return Ok(new_consumer);
                }
                return NotFound();
            }
        }

    }
}
