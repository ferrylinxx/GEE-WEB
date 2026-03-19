<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>XML Sitemap — Gabinet Estudis Econòmics</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style type="text/css">
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
        font-size: 13px;
        color: #333;
        background: #f5f5f5;
        margin: 0;
        padding: 0;
      }
      #content {
        margin: 0 auto;
        max-width: 1060px;
        padding: 30px 20px;
      }
      h1 {
        font-size: 24px;
        font-weight: 700;
        color: #1a3a5c;
        margin: 0 0 4px 0;
      }
      .brand {
        display: inline-block;
        padding: 3px 10px;
        background: #1a3a5c;
        color: #c8a96e;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 1.5px;
        border-radius: 3px;
        margin-bottom: 16px;
        text-transform: uppercase;
      }
      .expl {
        margin: 10px 0 20px 0;
        line-height: 1.6;
        color: #666;
        font-size: 13px;
      }
      .expl a {
        color: #c8a96e;
        font-weight: 600;
        text-decoration: none;
      }
      .expl a:hover {
        text-decoration: underline;
      }
      .count {
        display: inline-block;
        background: #e8f4e8;
        color: #1a6b1a;
        padding: 2px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
      }
      table {
        border: none;
        border-collapse: collapse;
        width: 100%;
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      }
      thead th {
        background: #1a3a5c;
        color: #fff;
        text-align: left;
        padding: 12px 14px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        border-bottom: 2px solid #c8a96e;
      }
      td {
        padding: 10px 14px;
        font-size: 12px;
        border-bottom: 1px solid #f0f0f0;
      }
      #sitemap tr:nth-child(odd) td {
        background-color: #fafafa;
      }
      #sitemap tbody tr:hover td {
        background-color: #f0f4f8;
      }
      a {
        color: #1a3a5c;
        text-decoration: none;
        font-weight: 500;
      }
      a:hover {
        color: #c8a96e;
        text-decoration: underline;
      }
      .lang {
        display: inline-block;
        padding: 1px 6px;
        background: #e8edf3;
        color: #1a3a5c;
        border-radius: 3px;
        font-size: 10px;
        font-weight: 700;
        margin-right: 3px;
        letter-spacing: 0.5px;
      }
      .priority {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 11px;
        font-weight: 600;
      }
      .p-high { background: #dcfce7; color: #166534; }
      .p-med  { background: #fef3c7; color: #92400e; }
      .p-low  { background: #f3f4f6; color: #6b7280; }
      .footer {
        margin-top: 24px;
        text-align: center;
        color: #999;
        font-size: 11px;
        padding: 12px;
      }
      .footer a { color: #c8a96e; }
    </style>
  </head>
  <body>
  <div id="content">
    <span class="brand">Gabinet Estudis Econòmics</span>
    <h1>XML Sitemap</h1>
    <p class="expl">
      This is an XML Sitemap generated for search engines like Google, Bing and Yahoo.<br/>
      It contains <span class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</span> with hreflang alternates for multilingual SEO.
      Learn more about <a href="https://sitemaps.org" target="_blank" rel="noopener">XML Sitemaps</a>.
    </p>

    <table id="sitemap" cellpadding="3">
      <thead>
        <tr>
          <th width="55%">URL</th>
          <th width="15%">Languages</th>
          <th width="5%">Images</th>
          <th width="10%">Priority</th>
          <th width="15%">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <xsl:for-each select="sitemap:urlset/sitemap:url">
          <tr>
            <td>
              <xsl:variable name="itemURL">
                <xsl:value-of select="sitemap:loc"/>
              </xsl:variable>
              <a href="{$itemURL}">
                <xsl:value-of select="sitemap:loc"/>
              </a>
            </td>
            <td>
              <xsl:for-each select="xhtml:link[@rel='alternate']">
                <xsl:if test="@hreflang != 'x-default'">
                  <span class="lang">
                    <xsl:value-of select="translate(@hreflang,'abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ')"/>
                  </span>
                </xsl:if>
              </xsl:for-each>
            </td>
            <td>
              <xsl:value-of select="count(image:image)"/>
            </td>
            <td>
              <xsl:choose>
                <xsl:when test="sitemap:priority &gt;= 0.8">
                  <span class="priority p-high"><xsl:value-of select="sitemap:priority"/></span>
                </xsl:when>
                <xsl:when test="sitemap:priority &gt;= 0.5">
                  <span class="priority p-med"><xsl:value-of select="sitemap:priority"/></span>
                </xsl:when>
                <xsl:otherwise>
                  <span class="priority p-low"><xsl:value-of select="sitemap:priority"/></span>
                </xsl:otherwise>
              </xsl:choose>
            </td>
            <td>
              <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
            </td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>

    <p class="footer">
      XML Sitemap generated by <a href="https://geeconomics.com">Gabinet Estudis Econòmics</a> · geeconomics.com
    </p>
  </div>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
