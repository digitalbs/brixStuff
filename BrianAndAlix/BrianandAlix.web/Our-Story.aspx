<%@ Page Title="" Language="C#" MasterPageFile="~/masters/Site.Master" AutoEventWireup="true" CodeBehind="Our-Story.aspx.cs" Inherits="BrianandAlix.web.Our_Story" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="/css/supersized.css">
    <link rel="stylesheet" href="/css/supersized.shutter.css" type="text/css" media="screen" /
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <header class="contentHeader">
        <h2>Our Story</h2>
    </header>
    <section id="ourStory" class="content">
        <p>So, where did it all begin?</p>
        <p><a href="javascript:void(0);" id="btnStartGallery">Begin Story</a></p>
    </section>
</asp:Content>
<asp:Content ID="extraScripts" ContentPlaceHolderID="Scripts" runat="server">
    <script type="text/javascript" src="/js/libs/jquery.easing.min.js"></script>
    <script src="/js/photoGallery.js"></script>

    <script type="text/javascript">
        $('#btnStartGallery').on('click', GALLERY.init);
    </script>
</asp:Content>
