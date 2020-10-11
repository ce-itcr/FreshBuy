using FreshBuy.Models;
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
        public IHttpActionResult ConsultProducerLogin([FromBody] JObject[] cart_client_data)
        {
            Debug.Print(cart_client_data[0].ToString());

            consumer_model.purchase(cart_client_data);

            return Ok(cart_client_data);

        }
    }
}
