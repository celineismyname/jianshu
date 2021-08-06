import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1619687373375'); /* IE9 */
    src: url('./iconfont.eot?t=1619687373375#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQsAAsAAAAACEAAAAPeAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDeINEATYCJAMQCwoABCAFhG0HTBs6B1GUDUqe7MeBHUO+CNAsdMkixBDZlH7k/4uHaO31zd7cz4ZQgWJwQJZUVFQKKDTJquo6VeHr0BII16Hc9EKqSV1ScwvdHLmEgIeDTkwq9pypwsxfLnRPfXPVg2PGywLLA5pLVHJU4gBH0TqwqI8M4X8QfJNfDmdehUfX+QR6TIuHnVXWtwM7iawLxFOOFQG7lEnWZIYqdEr2zWfYCtCq5ZXgCgBe+78fP0Fq2FG0DbL16n6FFBR/EbzJxGdYZrhxLeDleA6IB9FgBZDEw1LXLTwMrsD16LOt7AGqqjDWRMKbTIsFS/aiqtRN6f3Hiw6i6gPMTqjhi8BW8tUJICpTZ4LkBmYkqBBTvcF7QMiTnj+lUuseTzLA1s6NcnAmaId2QkGOGNkbRAz7dIoOk4sBIII4QSy6hs0UCmf635DfsWcDmLGRXHwawyZj9KZF0ajbw6P7Tnv3gOdacrG32RzV5921eSZaU93eahZ2dvfCNb39YyajVrZvZu8iDynd1bfYs6NnxuReL9r7tnmmCeEX3cHPuLudXGxu6ujx3HjwbNxh0ySzWZj9/zru3Gk3mU4wVTejy29CJ4u4zCQvbOoQlIq5QrPVn0I9OpudhFmXJGpiaM5xDFlXnPtqrBBd9vX84xfxKSIIFJa+wqZP6q/aYDS6uWHZMYa03kblZmcve93chCmxdi1pxkmDlWfPPgDS0M1BI4I7ba+wKmkLicQNVzM/v2OVh/pKu15xhV+DjIy9EnFl+uSr4aBuIygs9Vj3BnWvZ8XI0GNdN4Mhxff40bHbSiZEpmlMHqEeb12anZzOM56/xnvOnet2GPjZc/JuQQC74efOAS2A/xb8BO6zZjUWfGJ4ej7GZ/zlZf7lUzTOOb9KXmbbpx39x5J2ar9K3Fr8T6van5CfJSkxZ2oiW9RCFQnzvsHXFPTowZ+MMuLJGLrx1xUO1XgMRZcpaFQziMSsQKvXDnRUh9BjWdXBvUbxcJHdWDIXQRiyHYoBb6Ex5CoiMY+hNeEddAwFDj2uw/2YveaCI8p4KEJQSoknUpxEo2aYFRFBZitkDUoRn5T6TBryes5DpSQmZyNVUA35MXbQG9lUhBiK4TUqqhJdDCqVGkrLa+RQghJlCGlzk5KYsjdKlGhUgHCKB4kgkBRFbCIKR0JDjXFbI0Tu51tBLAMlEb6moc5Lg3h63PSUFImSWyCqVOpWDdfyED0jVioEYVAYPA0VSiVyQEoa1KBoyxfJQRJIIlkPv1auJNyMaatKnF+jesJ90IM8V0aJJjJa5VjkgmScOmFcF88hOE4L1RKCEalZqUjOuUYAAAAA') format('woff2'),
    url('./iconfont.woff?t=1619687373375') format('woff'),
    url('./iconfont.ttf?t=1619687373375') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1619687373375#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .iconspin:before {
    content: "\e851";
  }
  
  .iconAa:before {
    content: "\e636";
  }
  
  .iconthin-_write_penc:before {
    content: "\e602";
  }
  
  .iconfangdajing:before {
    content: "\e62d";
  }
`;

