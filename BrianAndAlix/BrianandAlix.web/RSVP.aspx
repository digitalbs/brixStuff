<%@ Page Title="" Language="C#" MasterPageFile="~/masters/Site.Master" AutoEventWireup="true" CodeBehind="RSVP.aspx.cs" Inherits="BrianandAlix.web.RSVP" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <header class="contentHeader">
        <h2>RSVP</h2>
    </header>
    <section id="rsvpForm">
        <form>
            <p>Please fill out the form below. We look forward to sharing our Wedding day with you.</p>
            <article id="guest" class="content">
                
                <section id="currentGuest">
                    <div class="guest">
                        <label>Guest</label>
                        <p><input type="text" id="txtFirstName" data-type="name" name="firstName" placeholder="First Name" /> <input type="text" data-type="name" name="lastName" id="txtLastName" placeholder="Last Name" /></p>
                    </div>

                    <div class="radioBtns">
                        <label>Will you attend?</label>
                        <ul>
                            <li><input type="radio" name="attend" value="yes" /> Yes</li>
                            <li><input type="radio" name="attend" value="no" /> No</li>
                        </ul>
                    </div>


                </section>
                <section id="additionalGuests">
                    <div class="radioBtns">
                        <label>Additional Guests?</label>
                        <ul>
                            <li><input type="radio" name="addGuests" value="yes" /> Yes</li>
                            <li><input type="radio" name="addGuests" value="no" /> No</li>
                        </ul>
                    </div>
                    <p>
                        <input type="phone" name="adults" placeholder="Adults" maxlength="2" />
                        <input type="phone" name="children" placeholder="Children" maxlength="2" />
                    </p>
                </section>
                <input type="submit" value="Submit" class="btn btn-success" />
            </article>
        </form>
    </section>
</asp:Content>
<asp:Content ID="footerScripts" ContentPlaceHolderID="Scripts" runat="server">
   <script type="text/javascript" src="js/libs/validator.js"></script>
</asp:Content>