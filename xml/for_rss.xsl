<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/rss">
   <html>
   	<head>
   		<style type="text/css">
         body {
            font-size:12px;
            font-family: Arial;
            font-weight: 900;
            background-color: #003366;
            text-align:center;
         }
         table{
            margin: 0 auto;
         }
         h3{
         	font-size: 32px;
            font-family: Arial;
            font-weight: 900;
            color:#00ccff;
            text-transform: uppercase;
         }
         td {
         	height:50px;
         	padding: 5px;
         	background-color: rgba(0, 0, 0, 0.5);
            border-radius:5px;

         }
         .whitecol {
         	background-color: rgba(255, 255, 255, 0.5);
            
         }
         a  {
         	text-decoration: none;
         	color:white;
         }
         a:hover{
         	color:violet;
         }
      </style>
   	</head>
      <body>
	      <h3> History of Mobilephones </h3>
				<table>
					<tr bgcolor="#00ccff">
					    <th>Title</th>
						<th>Link</th>
						<th>Description</th>
					</tr>
					<tr>
						<td class="whitecol"><xsl:value-of select="channel/title"/></td>
								<td>
									<xsl:element name="a">
							            <xsl:attribute name="href">
							               <xsl:value-of select="channel/link"/>
							            </xsl:attribute>
							            <xsl:value-of select="channel/link"/>
         							</xsl:element>
								</td>
						<td class="whitecol"><xsl:value-of select="channel/description"/></td>
					</tr>
					<xsl:for-each select="channel/item">
						<tr>
							    <td class="whitecol"><xsl:value-of select="title"/></td>
								<td>
									<xsl:element name="a">
							            <xsl:attribute name="href">
							               <xsl:value-of select="link"/>
							            </xsl:attribute>
							            <xsl:value-of select="link"/>
         							</xsl:element>
								</td>
								<td class="whitecol"><xsl:value-of select="description"/></td>
					    </tr>
					</xsl:for-each>
			  	</table>
	  </body>
   </html>
</xsl:template>
</xsl:stylesheet>