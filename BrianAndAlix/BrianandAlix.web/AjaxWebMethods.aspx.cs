using BrianandAlix.DataLayers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using BrianandAlix.web.Guests;

namespace BrianandAlix.web
{
    public partial class AjaxWebMethods : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        [WebMethod]
        public static bool submitRSVP(CurrentGuest Guests)
        {
            CurrentGuest guest = Guests;
            bool isSubmitted = RSVP_Query.submitRSVPForm(guest);
            return isSubmitted;
        }
    }
}