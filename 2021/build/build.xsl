<?xml version="1.0" encoding="UTF-8"?>
<!-- Generates the website pages from a map and reusable components.
    To use, run this stylesheet on sitemap.xml.
    
    Tested under saxon-HE 9.8
    -->
<!DOCTYPE xsl:stylesheet [
<!ENTITY footer SYSTEM "footer.ent">
]>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:xh='http://www.w3.org/1999/xhtml'
    exclude-result-prefixes="xs"
    version="2.0">
    
    <xsl:output method="html" version="5"/>
    
    <!-- entries in a map corresponding to webpage output: see ./sitemap.xml -->
    <xsl:variable name="map" select="/map/page" as="element(page)+"/>
    
    <!-- Outputs a .html page to the parent directory (i.e. the live location).
    The core content for each page resides in a .xhtml file in the build/ directory.
    -->
    <xsl:template match="/map/page">
        <xsl:variable name="sys-id" select="concat(@id, '.xhtml')"/>
        <xsl:variable name="page" select="if(doc-available($sys-id))
            then doc($sys-id)
            else error(xs:QName('no-page-source'), concat('page source not found: ', $sys-id))"/>
        
        <xsl:result-document href="../{@id}.html" indent="no">
            <xsl:apply-templates select="$page" mode="page">
                <xsl:with-param name="page-id" select="@id" tunnel="yes"/>
            </xsl:apply-templates>
        </xsl:result-document>
    </xsl:template>
    
    <!-- Assembles the page -->
    <xsl:template match="/xh:*" mode="page">
        <html lang="en">
            
            <xsl:apply-templates select="doc('header.xhtml')"/>
            
            <body>
                
                <xsl:apply-templates select="doc('topnav.xhtml')"/>                
                
                <!-- output body here -->
                <xsl:apply-templates select="." mode="#default"/>
                
                <xsl:apply-templates select="doc('sidebar.xhtml')"/>
                
                &footer;
                
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="xh:*">
        <xsl:element name="{local-name()}">
            <xsl:copy-of select="@*"/>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    
    <!-- Inserts items into the top navigation, with the correct focus -->
    <xsl:template match="processing-instruction(navitems)">
        <xsl:apply-templates select="$map" mode="navitems"/>
    </xsl:template>
    
    <!-- Insert a navigation link for each page, make it active if it's the 
        current page -->
    <xsl:template match="page" mode="navitems">
        <xsl:param name="page-id" tunnel="yes"/>
        
        <li>
            <xsl:if test="$page-id eq @id">
                <xsl:attribute name="class" select="'active'"/>
            </xsl:if>
            <a href="{@id}.html"><xsl:value-of select="."/></a>
            <xsl:if test="$page-id eq @id">
                <span class="sr-only"> (current)</span>
            </xsl:if>
        </li>
    </xsl:template>
    
    <xsl:template match="text() | comment() | processing-instruction()">
        <xsl:copy-of select="."/>
    </xsl:template>
    
</xsl:stylesheet>