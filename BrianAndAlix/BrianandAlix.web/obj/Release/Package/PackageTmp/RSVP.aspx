<%@ Page Title="" Language="C#" MasterPageFile="~/masters/Site.Master" AutoEventWireup="true" CodeBehind="RSVP.aspx.cs" Inherits="BrianandAlix.web.RSVP" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section id="rsvpForm">
        <form>
            <h2>RSVP</h2>
            <article id="guest">
                <h3>Please fill out the form below. We look forward to sharing our Wedding day with you.</h3>
            
                <label>Guest</label>
                <p><input type="text" id="txtFirstName" name="firstName" placeholder="First Name" /> <input type="text" name="lastName" id="txtLastName" placeholder="Last Name" /></p>

                <label>Will you attend?</label>
                <ul>
                    <li><input type="radio" name="attend" value="yes" /> Yes</li>
                    <li><input type="radio" name="attend" value="no" /> No</li>
                </ul>
            </article>
            <article id="additionalGuests">
                <label>Additional Guests?</label>
                <ul>
                    <li><input type="radio" name="addGuests" value="yes" /> Yes</li>
                    <li><input type="radio" name="addGuests" value="no" /> No</li>
                </ul>
                <p>
                    <input type="phone" name="adults" placeholder="Adults" maxlength="2" />
                    <input type="phone" name="children" placeholder="Children" maxlength="2" />
                </p>
            </article>
            <input type="submit" value="Submit" />
        </form>
    </section>
</asp:Content>
