using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FreshBuy.src.Entities
{
    public class Membership_Affiliation : Producer
    {
        public int affiliation_id;
        public bool state;
        public String reason_for_refusal;
        public String request_date;
        public String response_date;

        public Membership_Affiliation() { }
    }
}