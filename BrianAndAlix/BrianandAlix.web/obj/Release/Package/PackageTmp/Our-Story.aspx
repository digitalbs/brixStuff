<%@ Page Title="" Language="C#" MasterPageFile="~/masters/Site.Master" AutoEventWireup="true" CodeBehind="Our-Story.aspx.cs" Inherits="BrianandAlix.web.Our_Story" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="/css/supersized.css">
    <link rel="stylesheet" href="/css/supersized.shutter.css" type="text/css" media="screen" /
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <header class="home">
        <h2>Our Story</h2>
    </header>
    <section id="ourStory">
        <p>So, where did it all begin?</p>
        <p><a href="javascript:void(0);" id="btnStartGallery">Begin Story</a></p>
    </section>
</asp:Content>
<asp:Content ID="extraScripts" ContentPlaceHolderID="Scripts" runat="server">
    <script type="text/javascript" src="/js/libs/jquery.easing.min.js"></script>
    <script src="/js/photoGallery.js"></script>
</asp:Content>
