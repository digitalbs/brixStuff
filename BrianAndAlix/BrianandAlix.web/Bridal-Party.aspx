<%@ Page Title="" Language="C#" MasterPageFile="~/masters/Site.Master" AutoEventWireup="true" CodeBehind="Bridal-Party.aspx.cs" Inherits="BrianandAlix.web.Bridal_Party" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <header class="contentHeader">
        <h2>Bridal Party</h2>
    </header>
    <section id="bridalParty">
        <article id="bridemaids">
            <h2>Bridesmaids</h2>
        </article>
        <article id="bros">
            <h2>Groomsman</h2>
        </article>
        <section id="bridalPartyInfo">
            <a href="javascript:void(0);" class="btn btn-success" id="btnCloseBP">Close</a>
            <div></div>
        </section>
    </section>
</asp:Content>
