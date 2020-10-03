﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using System.Transactions;

namespace Backend_FreshBuy.DBMS
{
    class DBMS
    {
                /*-----------------------------------------------------------------------------Administration View Module-----------------------------------------------------------------------------*/
        //Producer Management
        public bool create_producer(int id, String name, String last_name, String province, String canton, String district, String birth, double phone_number, double sinpe_number, 
            String[] delivery_locations) { return true; }
        public bool update_producer(int id, String name, String last_name, String province, String canton, String district, String birth, double phone_number, double sinpe_number,
            String[] delivery_locations) { return true; }
        public bool delete_producer(int id) { return true; }

        //Membership Management
        public bool membership_input(int id, String name, String last_name, String province, String canton, String district, String birth, double phone_number, double sinpe_number,
            String[] delivery_locations)
        { return true; }
        public bool update_membership_affiliation(int affiliation_id, bool state, String reason_for_refusal) { return true; }

        //Category Management
        public bool create_category(int id, String name) { return true; }
        public bool update_category(int id, String name) { return true; }
        public bool delete_category(int id) { return true; }

        //Report View
        public String[] bestselling_products(String[] products) { return null; }
        public String[] bestprofitable_products(String[] products) { return null; }
        public String[] bestselling_products_by_producer(String[] products, int id) { return null; }
        public String[] customers_withmost_purchases(int id) { return null; }

        /*-----------------------------------------------------------------------------Producer View Module-----------------------------------------------------------------------------*/
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


        /*-----------------------------------------------------------------------------General Public Web View Module-----------------------------------------------------------------------------*/
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
