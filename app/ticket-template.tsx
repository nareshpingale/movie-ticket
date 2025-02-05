import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface TicketTemplateProps {
  movieName: string;
  imageUrl: string;
  movieDateTime: string;
  bookingDateTime: string;
  bookingId: string;
}

const TicketTemplate: React.FC<TicketTemplateProps> = ({ movieName, imageUrl, movieDateTime, bookingDateTime, bookingId }) => {

  const screen = Math.ceil(Math.random()*6);
  return (
    
    <div
      className="jsConTent"
      data-ogsc=""
      style={{ color: "rgba(237, 238, 240, 0.8)" }}
    >
      <meta content="text/html; charset=UTF-8" />
      <meta content="width=device-width" name="viewport" />
      <div
        data-ogsb="rgb(255, 255, 255)"
        style={{
          backgroundAttachment: "initial",
          backgroundClip: "initial",
          backgroundColor: "rgb(38, 38, 38) !important",
          backgroundImage: "initial",
          backgroundOrigin: "initial",
          backgroundPosition: "initial",
          backgroundRepeat: "initial",
          backgroundSize: "initial",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <table
          align="center"
          bgcolor="rgb(38, 38, 38)"
          
          cellPadding="0"
          cellSpacing="0"
          data-ogab="#fff"
          data-ogsb="rgb(255, 255, 255)"
          style={{
            backgroundAttachment: "initial",
            backgroundClip: "initial",
            backgroundColor: "rgb(38, 38, 38) !important",
            backgroundImage: "initial",
            backgroundOrigin: "initial",
            backgroundPosition: "initial",
            backgroundRepeat: "initial",
            backgroundSize: "initial",
            margin: "0px auto",
            padding: "10px 0px 25px",
          }}
          width="100%"
        >
          <tbody>
            <tr>
              <td valign="top" width="100%">
                <table
                  align="center"
                  bgcolor="rgb(38, 38, 38)"
                  
                  cellPadding="0"
                  cellSpacing="0"
                  data-ogab="ffffff"
                  data-ogsb=""
                  style={{
                    backgroundColor: "rgb(38, 38, 38) !important",
                    border: "1px solid rgb(229, 229, 229)",
                    boxShadow: "rgba(210, 210, 210, 0.4) 0px 0px 6px",
                    margin: "0px auto",
                    maxWidth: "650px",
                    minWidth: "650px",
                    padding: "35px 25px",
                  }}
                  width="600"
                >
                  <tbody>
                    <tr>
                      <td
                        colSpan={3}
                        data-ogsb="rgb(255, 255, 255)"
                        style={{
                          backgroundColor: "rgb(38, 38, 38) !important",
                          width: "600px",
                        }}
                      >
                        <a
                          data-ogsc="rgb(1, 1, 1)"
                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fin.bookmyshow.com%2F/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/20fOA3De7J_U8-VZQW49045L7h0=164"
                          style={{
                            color: "rgb(254, 254, 254) !important",
                            textDecoration: "none",
                          }}
                          target="_blank"
                        >
                          <img
                            
                            data-ogsb="rgb(255, 255, 255)"
                            data-ogsc="rgb(1, 1, 1)"
                            id="1721494576556116600_imgsrc_url_0"
                            src="https://in.bmscdn.com/webin/mailer/bmslogo.png"
                            style={{
                              backgroundColor: "rgb(38, 38, 38) !important",
                              color: "rgb(254, 254, 254) !important",
                              display: "block",
                              margin: "0px auto",
                              padding: "0px 10px 10px",
                            }}
                            width="150"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        data-ogsb="rgb(255, 255, 255)"
                        data-ogsc="rgb(130, 130, 130)"
                        style={{
                          backgroundColor: "rgb(38, 38, 38) !important",
                          color: "rgb(129, 129, 129) !important",
                          fontFamily: "Arial, sans-serif",
                          fontSize: "16px",
                          padding: "0px 25px 10px",
                          textAlign: "center",
                          verticalAlign: "top",
                        }}
                      >
                        <span
                          data-ogsc="rgb(76, 175, 80)"
                          style={{
                            color: "rgb(5, 126, 34) !important",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          Your booking is confirmed!
                        </span>
                        <link
                          data-ogsc=""
                          href="http://schema.org/Confirmed"
                          itemProp="reservationStatus"
                          style={{
                            color: "rgb(129, 129, 129) !important",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        data-ogsb="rgb(255, 255, 255)"
                        data-ogsc="rgb(130, 130, 130)"
                        style={{
                          backgroundColor: "rgb(38, 38, 38) !important",
                          color: "rgb(129, 129, 129) !important",
                          fontFamily: "Arial, sans-serif",
                          fontSize: "16px",
                          padding: "5px 25px",
                          textAlign: "center",
                          verticalAlign: "top",
                        }}
                      >
                        Booking ID &nbsp;
                        <span
                          data-ogsc="rgb(0, 0, 0)"
                          style={{
                            color: "rgba(237, 238, 240, 0.8) !important",
                            fontWeight: "bold",
                          }}
                        >
                          {bookingId}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        data-ogsb="rgb(255, 255, 255)"
                        style={{
                          backgroundColor: "rgb(38, 38, 38) !important",
                          padding: "25px 10px 0px",
                          textAlign: "left",
                          width: "600px",
                        }}
                      >
                        <table
                          align="center"
                          cellPadding="0"
                          cellSpacing="0"
                          data-ogsb="rgb(255, 255, 255)"
                          style={{
                            backgroundColor: "rgb(38, 38, 38) !important",
                            margin: "0px auto",
                            width: "580px",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <table
                                  align="center"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  data-ogsb="rgb(245, 245, 245)"
                                  style={{
                                    backgroundColor:
                                      "rgb(44, 44, 44) !important",
                                    borderRadius: "5px",
                                    margin: "0px auto",
                                    width: "580px",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td>
                                        <table
                                          align="center"
                                          cellPadding="0"
                                          cellSpacing="0"
                                          data-ogsb="rgb(245, 245, 245)"
                                          style={{
                                            backgroundColor:
                                              "rgb(                                          44,                                          44,                                          44                                        ) !important",
                                            borderTopLeftRadius: "5px",
                                            borderTopRightRadius: "5px",
                                            margin: "0px auto",
                                            padding: "10px",
                                            width: "580px",
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="center"
                                                data-ogsb="rgb(245, 245, 245)"
                                                style={{
                                                  backgroundColor:
                                                    "rgb(                                                44,                                                44,                                                44                                              ) !important",
                                                  width: "580px",
                                                }}
                                                valign="top"
                                              >
                                                <table
                                                  align="center"
                                                  cellPadding="0"
                                                  cellSpacing="0"
                                                  data-ogsb="rgb(245, 245, 245)"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(                                                  44,                                                  44,                                                  44                                                ) !important",
                                                    margin: "0px auto",
                                                    width: "100%",
                                                  }}
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        align="center"
                                                        data-ogsb="rgb(245, 245, 245)"
                                                        style={{
                                                          backgroundColor:
                                                            "rgb(                                                        44,                                                        44,                                                        44                                                      ) !important",
                                                          padding:
                                                            "10px 10px 0px",
                                                          width: "80px",
                                                        }}
                                                        valign="top"
                                                      >
                                                        <img
                                                          
                                                          data-ogsb="rgb(245, 245, 245)"
                                                          data-ogsc="rgb(1, 1, 1)"
                                                          height="120"
                                                          id="1721494576556116600_imgsrc_url_1"
                                                          src={`${imageUrl}`}
                                                          style={{
                                                            backgroundColor:
                                                              "rgb(                                                          44,                                                          44,                                                          44                                                        ) !important",
                                                            borderRadius: "5px",
                                                            color:
                                                              "rgb(                                                          254,                                                          254,                                                          254                                                        ) !important",
                                                            display: "block",
                                                          }}
                                                          width="80"
                                                        />
                                                      </td>
                                                      <td
                                                        align="center"
                                                        data-ogsb="rgb(245, 245, 245)"
                                                        style={{
                                                          backgroundColor:
                                                            "rgb(                                                        44,                                                        44,                                                        44                                                      ) !important",
                                                          padding: "10px",
                                                          width: "370px",
                                                        }}
                                                        valign="top"
                                                      >
                                                        <table
                                                          align="center"
                                                          cellPadding="0"
                                                          cellSpacing="0"
                                                          data-ogsb="rgb(245, 245, 245)"
                                                          style={{
                                                            backgroundColor:
                                                              "rgb(                                                          44,                                                          44,                                                          44                                                        ) !important",
                                                            margin: "0px auto",
                                                            width: "100%",
                                                          }}
                                                        >
                                                          <tbody>
                                                            <tr>
                                                              <td
                                                                align="left"
                                                                data-ogsb="rgb(245, 245, 245)"
                                                                data-ogsc="rgb(60, 60, 60)"
                                                                style={{
                                                                  backgroundColor:
                                                                    "rgb(                                                                44,                                                                44,                                                                44                                                              ) !important",
                                                                  color:
                                                                    "rgb(                                                                194,                                                                194,                                                                194                                                              ) !important",
                                                                  fontFamily:
                                                                    "Arial,                                                                sans-serif",
                                                                  fontSize:
                                                                    "20px",
                                                                  fontWeight:
                                                                    "bold",
                                                                  height:
                                                                    "50px",
                                                                  padding:
                                                                    "0px 5px                                                                0px 0px",
                                                                  textAlign:
                                                                    "left",
                                                                  verticalAlign:
                                                                    "top",
                                                                }}
                                                                valign="top"
                                                              >
                                                                <span
                                                                  data-ogsc=""
                                                                  style={{
                                                                    color:
                                                                      "rgb(                                                                  194,                                                                  194,                                                                  194                                                                ) !important",
                                                                  }}
                                                                >
                                                                  {movieName}
                                                                </span>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td
                                                                align="left"
                                                                data-ogsb="rgb(245, 245, 245)"
                                                                data-ogsc="rgb(60, 60, 60)"
                                                                style={{
                                                                  backgroundColor:
                                                                    "rgb(                                                                44,                                                                44,                                                                44                                                              ) !important",
                                                                  color:
                                                                    "rgb(                                                                194,                                                                194,                                                                194                                                              ) !important",
                                                                  fontFamily:
                                                                    "Arial,                                                                sans-serif",
                                                                  fontSize:
                                                                    "16px",
                                                                  padding:
                                                                    "0px 5px                                                                0px 0px",
                                                                  textAlign:
                                                                    "left",
                                                                  verticalAlign:
                                                                    "top",
                                                                }}
                                                                valign="bottom"
                                                              >
                                                                {movieDateTime}
                                                                <br />
                                                                <span
                                                                  data-ogsc="rgb(130, 130, 130)"
                                                                  style={{
                                                                    color:
                                                                      "rgb(                                                                  129,                                                                  129,                                                                  129                                                                ) !important",
                                                                    display:
                                                                      "block",
                                                                    fontSize:
                                                                      "13px",
                                                                    fontWeight:
                                                                      "400",
                                                                    paddingTop:
                                                                      "10px",
                                                                  }}
                                                                >
                                                                  <span
                                                                    data-ogsc=""
                                                                    style={{
                                                                      color:
                                                                        "rgb(                                                                    129,                                                                    129,                                                                    129                                                                  ) !important",
                                                                    }}
                                                                  >
                                                                    PVR ICON:
                                                                    Oberoi Mall,
                                                                    Goregaon
                                                                    (E)(SCREEN
                                                                    {screen})
                                                                  </span>
                                                                  <br />
                                                                  Mumbai,
                                                                  Mumbai:
                                                                  Western
                                                                  <div
                                                                    data-ogsc=""
                                                                    itemProp="address"
                                                                    itemScope
                                                                    itemType="http://schema.org/PostalAddress"
                                                                    style={{
                                                                      color:
                                                                        "rgb(                                                                    129,                                                                    129,                                                                    129                                                                  ) !important",
                                                                    }}
                                                                  >
                                                                    <meta
                                                                      content="3rd Floor, Oberoi Mall, "
                                                                      itemProp="streetAddress"
                                                                    />
                                                                    <meta
                                                                      content="Mumbai"
                                                                      itemProp="addressLocality"
                                                                    />
                                                                    <meta
                                                                      content="Maharashtra"
                                                                      itemProp="addressRegion"
                                                                    />
                                                                    <meta
                                                                      content="400063"
                                                                      itemProp="postalCode"
                                                                    />
                                                                    <meta
                                                                      content="India"
                                                                      itemProp="addressCountry"
                                                                    />
                                                                  </div>
                                                                </span>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td>
                                                                <br />
                                                                <span
                                                                  data-ogsc="rgb(1, 1, 1)"
                                                                  style={{
                                                                    color:
                                                                      "rgb(                                                                  254,                                                                  254,                                                                  254                                                                ) !important",
                                                                    fontSize:
                                                                      "15px",
                                                                    fontWeight:
                                                                      "bold",
                                                                  }}
                                                                >
                                                                  RE-Q8,Q9
                                                                </span>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-ogsb="rgb(245, 245, 245)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        44,                                        44,                                        44                                      ) !important",
                                          border: "0px",
                                          width: "580px",
                                        }}
                                        valign="top"
                                      >
                                        <table
                                          align="center"
                                          cellPadding="0"
                                          cellSpacing="0"
                                          data-ogsb="rgb(245, 245, 245)"
                                          style={{
                                            backgroundColor:
                                              "rgb(                                          44,                                          44,                                          44                                        ) !important",
                                            border: "0px",
                                            margin: "0px auto",
                                            width: "100%",
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="center"
                                                id="1721494576556116600_background-image_url_16"
                                                style={{
                                                  background:
                                                    "url('https://in.bmscdn.com/webin/mailer/dotted-line-new-5.png')                                                center top / contain no-repeat",
                                                  border: "0px",
                                                  overflow: "visible",
                                                  width: "582px",
                                                }}
                                                valign="top"
                                              >
                                                <table
                                                  align="center"
                                                  cellPadding="0"
                                                  cellSpacing="0"
                                                  style={{
                                                    border: "0",
                                                    margin: "0px auto",
                                                    width: "580px",
                                                  }}
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        align="left"
                                                        style={{
                                                          border: "0",
                                                          height: "40px",
                                                          padding:
                                                            "40px 30px 0px                                                        30px",
                                                          textAlign: "center",
                                                          verticalAlign:
                                                            "middle",
                                                          width: "60px",
                                                        }}
                                                        valign="top"
                                                      />
                                                      <td
                                                        align="center"
                                                        data-ogsc="rgb(130, 130, 130)"
                                                        style={{
                                                          border: "0px",
                                                          color:
                                                            "rgb(                                                        129,                                                        129,                                                        129                                                      ) !important",
                                                          fontFamily:
                                                            "Arial,                                                        sans-serif",
                                                          fontSize: "13px",
                                                          fontWeight: "400",
                                                          height: "40px",
                                                          padding:
                                                            "20px 10px 0px                                                        15px",
                                                          textAlign: "center",
                                                          verticalAlign:
                                                            "middle",
                                                          width: "270px",
                                                        }}
                                                        valign="top"
                                                      >
                                                        <p
                                                          data-ogsc=""
                                                          style={{
                                                            border: "0px",
                                                            color:
                                                              "rgb(                                                          129,                                                          129,                                                          129                                                        ) !important",
                                                            margin: "0px",
                                                            paddingBottom:
                                                              "6px",
                                                          }}
                                                        >
                                                          SCREEN {screen}
                                                        </p>
                                                      </td>
                                                      <td
                                                        style={{
                                                          border: "0",
                                                          width: "120px",
                                                        }}
                                                        valign="top"
                                                      >
                                                        <img
                                                          
                                                          data-ogsc="rgb(1, 1, 1)"
                                                          height="107"
                                                          id="1721494576556116600_imgsrc_url_2"
                                                          src="https://in.bmscdn.com/mailers/images/161202ticket/bookingstamps.png"
                                                          style={{
                                                            color:
                                                              "rgb(                                                          254,                                                          254,                                                          254                                                        ) !important",
                                                            display: "block",
                                                          }}
                                                          width="105"
                                                        />
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        data-ogsb="rgb(245, 245, 245)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        44,                                        44,                                        44                                      ) !important",
                                          border: "0px",
                                          width: "580px",
                                        }}
                                        valign="top"
                                      >
                                        <table
                                          align="center"
                                          cellPadding="0"
                                          cellSpacing="0"
                                          data-ogsb="rgb(245, 245, 245)"
                                          style={{
                                            backgroundColor:
                                              "rgb(                                          44,                                          44,                                          44                                        ) !important",
                                            border: "0px",
                                            margin: "0px auto",
                                            width: "100%",
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="center"
                                                style={{
                                                  backgroundSize: "contain",
                                                  borderTop:
                                                    "2px dashed                                                rgb(229, 229, 229)",
                                                  overflow: "visible",
                                                  width: "582px",
                                                }}
                                                valign="top"
                                              >
                                                <table
                                                  align="center"
                                                  cellPadding="0"
                                                  cellSpacing="0"
                                                  style={{
                                                    border: "0",
                                                    margin: "0px auto",
                                                    width: "580px",
                                                  }}
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        align="center"
                                                        data-ogsc="rgb(130, 130, 130)"
                                                        style={{
                                                          border: "0px",
                                                          color:
                                                            "rgb(                                                        129,                                                        129,                                                        129                                                      ) !important",
                                                          fontFamily:
                                                            "Arial,                                                        sans-serif",
                                                          fontSize: "20px",
                                                          fontWeight: "400",
                                                          height: "30px",
                                                          padding:
                                                            "20px 10px 0px                                                        15px",
                                                          textAlign: "center",
                                                          verticalAlign:
                                                            "middle",
                                                          width: "582px",
                                                        }}
                                                        valign="top"
                                                      >
                                                        <p
                                                          data-ogsc=""
                                                          style={{
                                                            color:
                                                              "rgb(                                                          129,                                                          129,                                                          129                                                        ) !important",
                                                            margin: "0px",
                                                          }}
                                                        >
                                                          Check your booking
                                                          details, discounts,
                                                          deals
                                                        </p>
                                                        <p
                                                          data-ogsc=""
                                                          style={{
                                                            border: "0px",
                                                            color:
                                                              "rgb(                                                          129,                                                          129,                                                          129                                                        ) !important",
                                                            margin: "0px",
                                                            paddingBottom:
                                                              "6px",
                                                          }}
                                                        >
                                                          and much more with
                                                          your ticket
                                                        </p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        align="center"
                                                        data-ogsc="rgb(130, 130, 130)"
                                                        style={{
                                                          border: "0px",
                                                          color:
                                                            "rgb(                                                        129,                                                        129,                                                        129                                                      ) !important",
                                                          fontFamily:
                                                            "Arial,                                                        sans-serif",
                                                          fontWeight: "400",
                                                          height: "32px",
                                                          padding: "12px 0px",
                                                          textAlign: "center",
                                                          verticalAlign:
                                                            "middle",
                                                          width: "582px",
                                                        }}
                                                        valign="top"
                                                      >
                                                        <a
                                                          data-ogsc=""
                                                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fin.bookmyshow.com%2Fprofile%2Fpurchase-history%3Fdata=xdhjN9kdwXA-FS4JDx-Ti2JFokexlFqTI3n5MWn-Kz8%26transactionID=4287688053%26bookingID=TXAPAY8%26utm_source=ptm_mail/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/wjZxF-9bEyU04W2sFkzzV1J8bCc=164"
                                                          style={{
                                                            color:
                                                              "rgb(                                                          201,                                                          136,                                                          255                                                        ) !important",
                                                            display: "block",
                                                            textDecoration:
                                                              "none",
                                                          }}
                                                          target="_blank"
                                                        >
                                                          <button
                                                            data-ogsb="rgb(220, 53, 88)"
                                                            data-ogsc="rgb(255, 255, 255)"
                                                            style={{
                                                              backgroundAttachment:
                                                                "initial",
                                                              backgroundClip:
                                                                "initial",
                                                              backgroundColor:
                                                                "rgb(                                                            243,                                                            77,                                                            106                                                          ) !important",
                                                              backgroundImage:
                                                                "initial",
                                                              backgroundOrigin:
                                                                "initial",
                                                              backgroundPosition:
                                                                "initial",
                                                              backgroundRepeat:
                                                                "initial",
                                                              backgroundSize:
                                                                "initial",
                                                              border: "0px",
                                                              borderRadius:
                                                                "8px",
                                                              boxShadow:
                                                                "rgba(                                                              0,                                                              0,                                                              0,                                                              0.2                                                            )                                                            0px 1px 2px",
                                                              color:
                                                                "rgb(                                                            38,                                                            38,                                                            38                                                          ) !important",
                                                              cursor: "pointer",
                                                              fontSize: "22px",
                                                              fontWeight: "400",
                                                              minHeight: "100%",
                                                              padding: "12px",
                                                              width: "222px",
                                                            }}
                                                          >
                                                            Open ticket
                                                          </button>
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                align="center"
                                                colSpan={2}
                                                data-ogsb="rgb(255, 255, 255)"
                                                style={{
                                                  backgroundColor:
                                                    "rgb(                                                38,                                                38,                                                38                                              ) !important",
                                                  paddingBottom: "10px",
                                                }}
                                                valign="top"
                                              >
                                                <img
                                                  
                                                  data-ogsb="rgb(245, 245, 245)"
                                                  data-ogsc="rgb(1, 1, 1)"
                                                  height="8"
                                                  id="1721494576556116600_imgsrc_url_3"
                                                  src="https://in.bmscdn.com/mailers/images/161223confirmation/4a.png"
                                                  style={{
                                                    backgroundColor:
                                                      "rgb(                                                  44,                                                  44,                                                  44                                                ) !important",
                                                    color:
                                                      "rgb(                                                  254,                                                  254,                                                  254                                                ) !important",
                                                    display: "block",
                                                  }}
                                                  width="580"
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="center"
                                colSpan={2}
                                data-ogsb="rgb(255, 255, 255)"
                                style={{
                                  backgroundColor: "rgb(38, 38, 38) !important",
                                  paddingBottom: "10px",
                                }}
                                valign="top"
                              >
                                <a
                                  data-ogsc="rgb(255, 255, 255)"
                                  href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fin.bookmyshow.com%2Fcoupons%2Fredemption%3Fcategory=deals%26transId=4287688053/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/a-d43w1WbUNhGrgGBoNXOQiUhMg=164"
                                  style={{
                                    color: "rgb(38, 38, 38) !important",
                                    display: "block",
                                    textDecoration: "none",
                                    width: "580px",
                                  }}
                                  target="_blank"
                                >
                                  <img
                                    
                                    data-ogsb="rgb(245, 245, 245)"
                                    data-ogsc="rgb(1, 1, 1)"
                                    height="243"
                                    id="1721494576556116600_imgsrc_url_4"
                                    src="https://assets-in.bmscdn.com/coupon/deals-mailer.png"
                                    style={{
                                      backgroundColor:
                                        "rgb(44, 44, 44) !important",
                                      color: "rgb(254, 254, 254) !important",
                                      display: "block",
                                    }}
                                    width="580"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="center"
                                data-ogsb="rgb(241, 241, 241)"
                                data-ogsc=""
                                style={{
                                  backgroundColor: "rgb(47, 47, 47) !important",
                                  color: "rgba(237, 238, 240, 0.8) !important",
                                  padding: "20px 15px",
                                  textAlign: "center",
                                  width: "580px",
                                }}
                              >
                                <strong
                                  data-ogsc=""
                                  style={{
                                    color:
                                      "rgba(237, 238, 240, 0.8) !important",
                                  }}
                                >
                                  Note:
                                </strong>
                                Please follow the covid/safety guidelines (As
                                per the directions from your local authority)
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        data-ogsb="rgb(255, 255, 255)"
                        data-ogsc="rgb(130, 130, 130)"
                        style={{
                          backgroundColor: "rgb(38, 38, 38) !important",
                          color: "rgb(129, 129, 129) !important",
                          fontFamily: "Arial, sans-serif",
                          fontSize: "14px",
                          textAlign: "left",
                          verticalAlign: "top",
                        }}
                        valign="top"
                      >
                        <table
                          align="center"
                          cellPadding="0"
                          cellSpacing="0"
                          data-ogsc=""
                          style={{
                            color: "rgb(129, 129, 129) !important",
                            fontFamily: "Arial, sans-serif",
                            margin: "0px auto",
                            width: "600px",
                          }}
                        >
                          <tbody
                            data-ogsc=""
                            style={{
                              color: "rgb(129, 129, 129) !important",
                            }}
                          >
                            <tr
                              data-ogsc=""
                              style={{
                                color: "rgb(129, 129, 129) !important",
                              }}
                            >
                              <td
                                align="left"
                                data-ogsb="rgb(255, 255, 255)"
                                data-ogsc="rgb(130, 130, 130)"
                                style={{
                                  backgroundColor: "rgb(38, 38, 38) !important",
                                  color: "rgb(129, 129, 129) !important",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "13px",
                                  fontWeight: "600",
                                  letterSpacing: "1px",
                                  padding: "15px 10px",
                                  textAlign: "left",
                                  verticalAlign: "top",
                                  width: "580px",
                                }}
                              >
                                ORDER SUMMARY
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        data-ogsb="rgb(255, 255, 255)"
                        style={{
                          backgroundColor: "rgb(38, 38, 38) !important",
                          textAlign: "center",
                        }}
                      >
                        <table
                          cellPadding="0"
                          cellSpacing="0"
                          style={{
                            border: "2px solid rgb(241, 241, 241)",
                            borderBottom: "0px !important",
                            borderTopLeftRadius: "5px",
                            borderTopRightRadius: "5px",
                            fontFamily: "Arial, sans-serif",
                            margin: "0 auto",
                            padding: "25px 25px 15px 25px",
                            width: "580px",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="left"
                                data-ogsb="rgb(255, 255, 255)"
                                data-ogsc="rgb(130, 130, 130)"
                                style={{
                                  backgroundColor: "rgb(38, 38, 38) !important",
                                  color: "rgb(129, 129, 129) !important",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "14px",
                                  textAlign: "left",
                                  verticalAlign: "top",
                                  width: "100%",
                                }}
                                valign="top"
                              >
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  data-ogsc=""
                                  style={{
                                    color: "rgb(129, 129, 129) !important",
                                    fontFamily: "Arial, sans-serif",
                                    margin: "0px auto",
                                    paddingBottom: "20px",
                                    width: "100%",
                                  }}
                                >
                                  <tbody
                                    data-ogsc=""
                                    style={{
                                      color: "rgb(129, 129, 129) !important",
                                    }}
                                  >
                                    <tr
                                      data-ogsc=""
                                      style={{
                                        color: "rgb(129, 129, 129) !important",
                                      }}
                                    >
                                      <td
                                        align="left"
                                        data-ogsb="rgb(255, 255, 255)"
                                        data-ogsc="rgb(63, 71, 78)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        38,                                        38,                                        38                                      ) !important",
                                          color:
                                            "rgb(176, 185, 194) !important",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "14px",
                                          textAlign: "left",
                                          verticalAlign: "top",
                                          width: "50%",
                                        }}
                                      >
                                        <p
                                          data-ogsc=""
                                          style={{
                                            color:
                                              "rgb(176, 185, 194) !important",
                                            margin: "0px",
                                            padding: "0px 0px 12px",
                                          }}
                                        >
                                          <strong
                                            data-ogsc=""
                                            style={{
                                              color:
                                                "rgb(176, 185, 194) !important",
                                            }}
                                          >
                                            TICKET AMOUNT
                                          </strong>
                                        </p>
                                        <span
                                          data-ogsc="rgb(130, 130, 130)"
                                          style={{
                                            color:
                                              "rgb(129, 129, 129) !important",
                                            fontSize: "13px",
                                          }}
                                        >
                                          Quantity
                                        </span>
                                      </td>
                                      <td
                                        align="right"
                                        data-ogsb="rgb(255, 255, 255)"
                                        data-ogsc="rgb(60, 60, 60)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        38,                                        38,                                        38                                      ) !important",
                                          color:
                                            "rgb(194, 194, 194) !important",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "15px",
                                          textAlign: "right",
                                          verticalAlign: "top",
                                          width: "50%",
                                        }}
                                      >
                                        <p
                                          data-ogsc=""
                                          style={{
                                            color:
                                              "rgb(194, 194, 194) !important",
                                            margin: "0px",
                                            padding: "0px 0px 12px",
                                          }}
                                        >
                                          Rs.1100.00
                                        </p>
                                        <span
                                          data-ogsc="rgb(130, 130, 130)"
                                          style={{
                                            color:
                                              "rgb(129, 129, 129) !important",
                                            fontSize: "13px",
                                          }}
                                        >
                                          2 <span
                                            data-ogsc=""
                                            style={{
                                              color:
                                                "rgb(129, 129, 129) !important",
                                            }}
                                          >
                                            tickets
                                          </span>
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="left"
                                data-ogsb="rgb(255, 255, 255)"
                                data-ogsc="rgb(130, 130, 130)"
                                style={{
                                  backgroundColor: "rgb(38, 38, 38) !important",
                                  color: "rgb(129, 129, 129) !important",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "14px",
                                  textAlign: "left",
                                  verticalAlign: "top",
                                  width: "100%",
                                }}
                                valign="top"
                              >
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  data-ogsc=""
                                  style={{
                                    borderTop: "2px dashed rgb(241, 241, 241)",
                                    color: "rgb(129, 129, 129) !important",
                                    fontFamily: "Arial, sans-serif",
                                    margin: "0px auto",
                                    padding: "20px 0px",
                                    width: "100%",
                                  }}
                                >
                                  <tbody
                                    data-ogsc=""
                                    style={{
                                      color: "rgb(129, 129, 129) !important",
                                    }}
                                  >
                                    <tr
                                      data-ogsc=""
                                      style={{
                                        color: "rgb(129, 129, 129) !important",
                                      }}
                                    >
                                      <td
                                        align="left"
                                        data-ogsb="rgb(255, 255, 255)"
                                        data-ogsc="rgb(63, 71, 78)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        38,                                        38,                                        38                                      ) !important",
                                          color:
                                            "rgb(176, 185, 194) !important",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "14px",
                                          textAlign: "left",
                                          verticalAlign: "top",
                                          width: "50%",
                                        }}
                                      >
                                        <p
                                          data-ogsc=""
                                          style={{
                                            color:
                                              "rgb(176, 185, 194) !important",
                                            margin: "0px",
                                            padding: "0px 0px 12px",
                                            textTransform: "uppercase",
                                          }}
                                        >
                                          <strong
                                            data-ogsc=""
                                            style={{
                                              color:
                                                "rgb(176, 185, 194) !important",
                                            }}
                                          >
                                            Convenience fees
                                          </strong>
                                        </p>
                                        <p
                                          data-ogsc="rgb(130, 130, 130)"
                                          style={{
                                            color:
                                              "rgb(129, 129, 129) !important",
                                            fontSize: "13px",
                                            margin: "0px",
                                            padding: "0px 0px 4px",
                                          }}
                                        >
                                          Base Amount
                                        </p>
                                        <p
                                          data-ogsc="rgb(130, 130, 130)"
                                          style={{
                                            color:
                                              "rgb(129, 129, 129) !important",
                                            fontSize: "13px",
                                            margin: "0px",
                                            padding: "0px 0px 4px",
                                          }}
                                        />
                                        <p
                                          data-ogsc="rgb(130, 130, 130)"
                                          style={{
                                            color:
                                              "rgb(129, 129, 129) !important",
                                            fontSize: "13px",
                                            margin: "0px",
                                            padding: "0px 0px 4px",
                                          }}
                                        >
                                          Central GST (CGST) @ 9%
                                        </p>
                                        <p
                                          data-ogsc="rgb(130, 130, 130)"
                                          style={{
                                            color:
                                              "rgb(129, 129, 129) !important",
                                            fontSize: "13px",
                                            margin: "0px",
                                            padding: "0px 0px 4px",
                                          }}
                                        >
                                          State GST (SGST) @ 9%
                                        </p>
                                      </td>
                                      <td
                                        align="right"
                                        data-ogsb="rgb(255, 255, 255)"
                                        data-ogsc="rgb(60, 60, 60)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        38,                                        38,                                        38                                      ) !important",
                                          color:
                                            "rgb(194, 194, 194) !important",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "15px",
                                          textAlign: "right",
                                          verticalAlign: "top",
                                          width: "50%",
                                        }}
                                      >
                                        <p
                                          data-ogsc=""
                                          style={{
                                            color:
                                              "rgb(194, 194, 194) !important",
                                            margin: "0px",
                                            padding: "0px 0px 12px",
                                          }}
                                        >
                                          Rs.129.80
                                        </p>
                                        <p
                                          data-ogsc="rgb(130, 130, 130)"
                                          style={{
                                            color:
                                              "rgb(129, 129, 129) !important",
                                            fontSize: "13px",
                                            margin: "0px",
                                            padding: "0px 0px 4px",
                                          }}
                                        >
                                          Rs.110.00
                                        </p>
                                        <p
                                          data-ogsc="rgb(130, 130, 130)"
                                          style={{
                                            color:
                                              "rgb(129, 129, 129) !important",
                                            fontSize: "13px",
                                            margin: "0px",
                                            padding: "0px 0px 4px",
                                          }}
                                        />
                                        <p
                                          data-ogsc="rgb(130, 130, 130)"
                                          style={{
                                            color:
                                              "rgb(129, 129, 129) !important",
                                            fontSize: "13px",
                                            margin: "0px",
                                            padding: "0px 0px 4px",
                                          }}
                                        >
                                          Rs.9.90
                                        </p>
                                        <p
                                          data-ogsc="rgb(130, 130, 130)"
                                          style={{
                                            color:
                                              "rgb(129, 129, 129) !important",
                                            fontSize: "13px",
                                            margin: "0px",
                                            padding: "0px 0px 4px",
                                          }}
                                        >
                                          Rs.9.90
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="left"
                                data-ogsb="rgb(255, 255, 255)"
                                data-ogsc="rgb(130, 130, 130)"
                                style={{
                                  backgroundColor: "rgb(38, 38, 38) !important",
                                  color: "rgb(129, 129, 129) !important",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "14px",
                                  textAlign: "left",
                                  verticalAlign: "top",
                                  width: "100%",
                                }}
                                valign="top"
                              />
                            </tr>
                            <tr />
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        data-ogsb="rgb(255, 255, 255)"
                        style={{
                          backgroundColor: "rgb(38, 38, 38) !important",
                          textAlign: "center",
                          width: "580px",
                        }}
                      >
                        <table
                          cellPadding="0"
                          cellSpacing="0"
                          data-ogsb="rgb(255, 255, 255)"
                          style={{
                            backgroundColor: "rgb(38, 38, 38) !important",
                            margin: "0px auto",
                            width: "580px",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="left"
                                data-ogsb="rgb(241, 241, 241)"
                                data-ogsc="rgb(130, 130, 130)"
                                style={{
                                  backgroundColor: "rgb(47, 47, 47) !important",
                                  color: "rgb(129, 129, 129) !important",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "14px",
                                  textAlign: "left",
                                  verticalAlign: "top",
                                }}
                                valign="top"
                              >
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  data-ogsc=""
                                  style={{
                                    borderBottom:
                                      "2px dashed rgb(241, 241, 241)",
                                    color: "rgb(129, 129, 129) !important",
                                    fontFamily: "Arial, sans-serif",
                                    margin: "0px auto",
                                    padding: "20px 25px 10px",
                                    width: "100%",
                                  }}
                                >
                                  <tbody
                                    data-ogsc=""
                                    style={{
                                      color: "rgb(129, 129, 129) !important",
                                    }}
                                  >
                                    <tr
                                      data-ogsc=""
                                      style={{
                                        color: "rgb(129, 129, 129) !important",
                                      }}
                                    >
                                      <td
                                        align="left"
                                        data-ogsb="rgb(241, 241, 241)"
                                        data-ogsc="rgb(51, 51, 51)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        47,                                        47,                                        47                                      ) !important",
                                          color:
                                            "rgb(204, 204, 204) !important",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "16px",
                                          fontWeight: "bold",
                                          textAlign: "left",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        AMOUNT PAID
                                      </td>
                                      <td
                                        align="left"
                                        data-ogsb="rgb(241, 241, 241)"
                                        data-ogsc="rgb(51, 51, 51)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        47,                                        47,                                        47                                      ) !important",
                                          color:
                                            "rgb(204, 204, 204) !important",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "16px",
                                          fontWeight: "bold",
                                          textAlign: "right",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        Rs.1229.80
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-ogsb="rgb(255, 255, 255)"
                                style={{
                                  backgroundColor: "rgb(38, 38, 38) !important",
                                  width: "100%",
                                }}
                                valign="top"
                              >
                                <img
                                  
                                  data-ogsb="rgb(255, 255, 255)"
                                  data-ogsc="rgb(1, 1, 1)"
                                  height="15"
                                  id="1721494576556116600_imgsrc_url_5"
                                  src="https://in.bmscdn.com/mailers/images/161202ticket/zigzag.png"
                                  style={{
                                    backgroundColor:
                                      "rgb(38, 38, 38) !important",
                                    color: "rgb(254, 254, 254) !important",
                                    display: "block",
                                    width: "100%",
                                  }}
                                  width="580"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="center"
                                data-ogsb="rgb(255, 255, 255)"
                                style={{
                                  backgroundColor: "rgb(38, 38, 38) !important",
                                  padding: "20px 0px",
                                  width: "580px",
                                }}
                                valign="top"
                              >
                                <table
                                  align="center"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  data-ogsb="rgb(255, 255, 255)"
                                  style={{
                                    backgroundColor:
                                      "rgb(38, 38, 38) !important",
                                    margin: "0px auto",
                                    width: "100%",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="left"
                                        data-ogsb="rgb(255, 255, 255)"
                                        data-ogsc="rgb(63, 71, 78)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        38,                                        38,                                        38                                      ) !important",
                                          color:
                                            "rgb(176, 185, 194) !important",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "13px",
                                          fontWeight: "bold",
                                          textAlign: "left",
                                          verticalAlign: "top",
                                          width: "260px",
                                        }}
                                        valign="top"
                                      >
                                        <p
                                          data-ogsc="rgb(120, 120, 120)"
                                          style={{
                                            color:
                                              "rgb(137, 137, 137) !important",
                                            fontSize: "12px",
                                            margin: "0px",
                                            padding: "0px 0px 4px",
                                          }}
                                        >
                                          Booking Date & Time
                                        </p>
                                        {bookingDateTime}
                                      </td>
                                      <td
                                        align="left"
                                        data-ogsb="rgb(255, 255, 255)"
                                        data-ogsc="rgb(63, 71, 78)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        38,                                        38,                                        38                                      ) !important",
                                          color:
                                            "rgb(176, 185, 194) !important",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "13px",
                                          fontWeight: "bold",
                                          textAlign: "left",
                                          verticalAlign: "top",
                                          width: "240px",
                                        }}
                                        valign="top"
                                      >
                                        <p
                                          data-ogsc="rgb(120, 120, 120)"
                                          style={{
                                            color:
                                              "rgb(137, 137, 137) !important",
                                            fontSize: "12px",
                                            margin: "0px",
                                            padding: "0px 0px 4px",
                                          }}
                                        >
                                          Payment Type
                                        </p>
                                        Credit Card/Debit Card
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderTop: "2px dashed rgb(241, 241, 241)",
                                  paddingTop: "15px",
                                }}
                                valign="top"
                                width="580"
                              >
                                <table
                                  align="center"
                                  
                                  cellPadding="0"
                                  cellSpacing="0"
                                  width="580"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        data-ogsb="rgb(255, 255, 255)"
                                        data-ogsc="rgb(102, 102, 102)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        38,                                        38,                                        38                                      ) !important",
                                          color:
                                            "rgb(153, 153, 153) !important",
                                          padding: "10px 0px 30px",
                                        }}
                                        valign="top"
                                        width="500"
                                      >
                                        <a
                                          data-ogsc=""
                                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fin.bookmyshow.com%2Ffnb-listing%3Fvc=POVI%26bidint=0%26bid=TXAPAY8%26tid=4287688053%26utm_source=bms_email%26utm_medium=email%26utm_campaign=fnb_email/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/U2lWSC2GCDRzD1iQ-J0CVMooPys=164"
                                          style={{
                                            color:
                                              "rgb(201, 136, 255) !important",
                                            textDecoration: "none",
                                          }}
                                          target="_blank"
                                        >
                                          <img
                                            data-ogsc=""
                                            id="1721494576556116600_imgsrc_url_6"
                                            src="http://in.bmscdn.com/webin/mailer/fnb/acombo51.png"
                                            style={{
                                              color:
                                                "rgb(201, 136, 255) !important",
                                            }}
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        data-ogsb="rgb(255, 255, 255)"
                        style={{
                          backgroundColor: "rgb(38, 38, 38) !important",
                          textAlign: "center",
                          width: "580px",
                        }}
                      >
                        <table
                          cellPadding="0"
                          cellSpacing="0"
                          data-ogsb="rgb(255, 255, 255)"
                          style={{
                            backgroundColor: "rgb(38, 38, 38) !important",
                            margin: "0px auto",
                            width: "580px",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                data-ogsb="rgb(255, 255, 255)"
                                data-ogsc="rgb(120, 120, 120)"
                                style={{
                                  backgroundColor: "rgb(38, 38, 38) !important",
                                  borderTop: "2px dashed rgb(241, 241, 241)",
                                  color: "rgb(137, 137, 137) !important",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "13px",
                                  padding: "30px 0px 6px",
                                  textAlign: "left",
                                  verticalAlign: "top",
                                }}
                              >
                                IMPORTANT INSTRUCTIONS
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="center"
                                data-ogsb="rgb(255, 255, 255)"
                                data-ogsc="rgb(120, 120, 120)"
                                style={{
                                  backgroundColor: "rgb(38, 38, 38) !important",
                                  borderBottom: "2px dashed rgb(241, 241, 241)",
                                  color: "rgb(137, 137, 137) !important",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "11px",
                                  padding: "5px 0px 30px",
                                  textAlign: "left",
                                  verticalAlign: "top",
                                }}
                              >
                                <p
                                  data-ogsc=""
                                  style={{
                                    color: "rgb(137, 137, 137) !important",
                                    margin: "0px",
                                    padding: "0px 0px 4px",
                                  }}
                                >
                                  This transaction can be cancelled up to 20
                                  min(s) before the show as per cinema
                                  cancellation policy.
                                </p>
                                <p
                                  data-ogsc=""
                                  style={{
                                    color: "rgb(137, 137, 137) !important",
                                    margin: "0px",
                                    padding: "0px 0px 4px",
                                  }}
                                >
                                  The Credit Card and Credit Card Holder must be
                                  present at the ticket counter while collecting
                                  the ticket(s).
                                </p>
                                <p
                                  data-ogsc=""
                                  style={{
                                    color: "rgb(137, 137, 137) !important",
                                    margin: "0px",
                                    padding: "0px 0px 4px",
                                  }}
                                >
                                  GST collected is paid to the department.
                                </p>
                                <p
                                  data-ogsc=""
                                  style={{
                                    color: "rgb(137, 137, 137) !important",
                                    margin: "0px",
                                    padding: "0px 0px 4px",
                                  }}
                                >
                                  999799 - Other Services n.e.c. PAN Based GSTN.
                                  27AABCB3428P1ZF.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        data-ogsb="rgb(255, 255, 255)"
                        style={{
                          backgroundColor: "rgb(38, 38, 38) !important",
                          width: "600px",
                        }}
                      >
                        <table
                          align="center"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{
                            margin: "0px auto",
                            maxWidth: "560px",
                            width: "100%",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="left"
                                colSpan={2}
                                data-ogsb="rgb(255, 255, 255)"
                                data-ogsc="rgb(100, 108, 112)"
                                style={{
                                  backgroundColor: "rgb(38, 38, 38) !important",
                                  color: "rgb(142, 150, 155) !important",
                                  fontFamily: "Arial, sans-serif",
                                  fontSize: "13px",
                                  fontWeight: "bold",
                                  padding: "20px 20px 10px",
                                  textAlign: "center",
                                  verticalAlign: "top",
                                }}
                              >
                                Download Mobile App
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  width: "560px",
                                }}
                              >
                                <table
                                  align="center"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{
                                    verticalAlign: "top",
                                    width: "560px",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="right"
                                        style={{
                                          padding: "8px 5px",
                                        }}
                                      >
                                        <a
                                          data-ogsc="rgb(255, 255, 255)"
                                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid=com.bt.bms%26hl=en/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/sufzZxm8hlY0qUNNBw-zZ-xl4dU=164"
                                          style={{
                                            color: "rgb(38, 38, 38) !important",
                                            display: "block",
                                            textDecoration: "none",
                                            width: "130px",
                                          }}
                                          target="_blank"
                                        >
                                          <img
                                            alt="Google Play"
                                            
                                            data-ogsb="rgb(241, 241, 241)"
                                            data-ogsc="rgb(1, 1, 1)"
                                            height="37"
                                            id="1721494576556116600_imgsrc_url_7"
                                            src="https://in.bmscdn.com/mailers/images/161202ticket/google-play-1.png"
                                            style={{
                                              backgroundColor:
                                                "rgb(                                            47,                                            47,                                            47                                          ) !important",
                                              color:
                                                "rgb(254, 254, 254) !important",
                                              display: "block",
                                            }}
                                            title="Google Play"
                                            width="130"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        align="left"
                                        style={{
                                          padding: "8px 5px",
                                        }}
                                      >
                                        <a
                                          data-ogsc="rgb(255, 255, 255)"
                                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fitunes.apple.com%2Fin%2Fapp%2Fbookmyshow-movie-event-play%2Fid405894842%3Fmt=8/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/DQGYOdGX5dQEzN-R7CB0HT5jwl0=164"
                                          style={{
                                            color: "rgb(38, 38, 38) !important",
                                            display: "block",
                                            textDecoration: "none",
                                            width: "130px",
                                          }}
                                          target="_blank"
                                        >
                                          <img
                                            alt="Apple Store"
                                            
                                            data-ogsb="rgb(241, 241, 241)"
                                            data-ogsc="rgb(1, 1, 1)"
                                            height="37"
                                            id="1721494576556116600_imgsrc_url_8"
                                            src="https://in.bmscdn.com/mailers/images/161202ticket/app-store-1.png"
                                            style={{
                                              backgroundColor:
                                                "rgb(                                            47,                                            47,                                            47                                          ) !important",
                                              color:
                                                "rgb(254, 254, 254) !important",
                                              display: "block",
                                            }}
                                            title="Apple Store"
                                            width="130"
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        data-ogsb="rgb(255, 255, 255)"
                        style={{
                          backgroundColor: "rgb(38, 38, 38) !important",
                          padding: "10px 0px",
                          width: "600px",
                        }}
                      >
                        <table
                          align="center"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{
                            margin: "0px auto",
                            maxWidth: "600px",
                            width: "100%",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  borderRight: "1px solid rgb(239, 239, 239)",
                                  width: "50%",
                                }}
                                valign="top"
                              >
                                <table
                                  align="center"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{
                                    padding: "0 10px 10px 10px",
                                    width: "90%",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="left"
                                        colSpan={7}
                                        data-ogsb="rgb(255, 255, 255)"
                                        data-ogsc="rgb(100, 108, 112)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        38,                                        38,                                        38                                      ) !important",
                                          color:
                                            "rgb(142, 150, 155) !important",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "13px",
                                          fontWeight: "bold",
                                          padding: "10px 20px",
                                          textAlign: "center",
                                          verticalAlign: "top",
                                          width: "90%",
                                        }}
                                      >
                                        Follow Us On
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          textAlign: "center",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        <a
                                          data-ogsc=""
                                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fwww.facebook.com%2Fpages%2FBookMyShow%2F82235273865%3F%26utm_source=TicketConfirmation09Jan2017%26utm_medium=email%26utm_campaign=Facebook/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/Cev4C6iduFvjG-ys0TCkhdYvCwo=164"
                                          style={{
                                            color:
                                              "rgb(201, 136, 255) !important",
                                          }}
                                          target="_blank"
                                        >
                                          <img
                                            alt="Facebook"
                                            
                                            data-ogsc=""
                                            height="18"
                                            id="1721494576556116600_imgsrc_url_9"
                                            src="https://in.bmscdn.com/mailers/images/160720bmsreview/facebook.png"
                                            style={{
                                              color:
                                                "rgb(201, 136, 255) !important",
                                              padding: "5px",
                                            }}
                                            title="Facebook"
                                            width="22"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        style={{
                                          textAlign: "center",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        <a
                                          data-ogsc=""
                                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fwww.twitter.com%2FBookMyShow%3F%26utm_source=TicketConfirmation09Jan2017%26utm_medium=email%26utm_campaign=Twitter/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/LVOBNKU13SPXyIYjBDnBVbsRUaQ=164"
                                          style={{
                                            color:
                                              "rgb(201, 136, 255) !important",
                                          }}
                                          target="_blank"
                                        >
                                          <img
                                            alt="Twitter"
                                            
                                            data-ogsc=""
                                            height="18"
                                            id="1721494576556116600_imgsrc_url_10"
                                            src="https://in.bmscdn.com/mailers/images/160720bmsreview/twitter.png"
                                            style={{
                                              color:
                                                "rgb(201, 136, 255) !important",
                                              padding: "5px",
                                            }}
                                            title="Twitter"
                                            width="22"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        style={{
                                          textAlign: "center",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        <a
                                          data-ogsc=""
                                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fwww.youtube.com%2Fuser%2Fbookmyshow%3F%26utm_source=TicketConfirmation09Jan2017%26utm_medium=email%26utm_campaign=Youtube/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/vXNs79nPEuph5EPYjlCEo0HFTQA=164"
                                          style={{
                                            color:
                                              "rgb(201, 136, 255) !important",
                                          }}
                                          target="_blank"
                                        >
                                          <img
                                            alt="Youtube"
                                            
                                            data-ogsc=""
                                            height="18"
                                            id="1721494576556116600_imgsrc_url_11"
                                            src="https://in.bmscdn.com/mailers/images/160720bmsreview/youtube.png"
                                            style={{
                                              color:
                                                "rgb(201, 136, 255) !important",
                                              padding: "5px",
                                            }}
                                            title="Youtube"
                                            width="22"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        style={{
                                          textAlign: "center",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        <a
                                          data-ogsc=""
                                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fwww.instagram.com%2Fbookmyshowin/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/eNzOzjbwuBGWZyBufV9IN5BjxRA=164"
                                          style={{
                                            color:
                                              "rgb(201, 136, 255) !important",
                                          }}
                                          target="_blank"
                                        >
                                          <img
                                            alt="Instagram"
                                            
                                            data-ogsc=""
                                            height="18"
                                            id="1721494576556116600_imgsrc_url_12"
                                            src="https://in.bmscdn.com/mailers/images/160720bmsreview/instagram.png"
                                            style={{
                                              color:
                                                "rgb(201, 136, 255) !important",
                                              padding: "5px",
                                            }}
                                            title="Instagram"
                                            width="22"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        style={{
                                          textAlign: "center",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        <a
                                          data-ogsc=""
                                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fwww.linkedin.com%2Fcompany%2Fbookmyshow%2F%3F%26utm_source=TicketConfirmation09Jan2017%26utm_medium=email%26utm_campaign=Linkedin/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/Nr5hD4oKLVlXjo2FuLweNRgVkhg=164"
                                          style={{
                                            color:
                                              "rgb(201, 136, 255) !important",
                                          }}
                                          target="_blank"
                                        >
                                          <img
                                            alt="Linkedin"
                                            
                                            data-ogsc=""
                                            height="18"
                                            id="1721494576556116600_imgsrc_url_13"
                                            src="https://in.bmscdn.com/mailers/images/160720bmsreview/linkedin.png"
                                            style={{
                                              color:
                                                "rgb(201, 136, 255) !important",
                                              padding: "5px",
                                            }}
                                            title="Linkedin"
                                            width="22"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        style={{
                                          textAlign: "center",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        <a
                                          data-ogsc=""
                                          href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fwww.pinterest.com%2Fbookmyshow%2F%3F%26utm_source=TicketConfirmation09Jan2017%26utm_medium=email%26utm_campaign=Pinterest/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/lwI8w9L49YLlLYoML0y-3bOTZz4=164"
                                          style={{
                                            color:
                                              "rgb(201, 136, 255) !important",
                                          }}
                                          target="_blank"
                                        >
                                          <img
                                            alt="Pinterest"
                                            
                                            data-ogsc=""
                                            height="18"
                                            id="1721494576556116600_imgsrc_url_14"
                                            src="https://in.bmscdn.com/mailers/images/160720bmsreview/pinterest.png"
                                            style={{
                                              color:
                                                "rgb(201, 136, 255) !important",
                                              padding: "5px",
                                            }}
                                            title="Pinterest"
                                            width="22"
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td
                                style={{
                                  width: "50%",
                                }}
                                valign="top"
                              >
                                <table
                                  align="center"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{
                                    padding: "0 10px 10px 10px",
                                    width: "100%",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="left"
                                        data-ogsb="rgb(255, 255, 255)"
                                        data-ogsc="rgb(100, 108, 112)"
                                        style={{
                                          backgroundColor:
                                            "rgb(                                        38,                                        38,                                        38                                      ) !important",
                                          color:
                                            "rgb(142, 150, 155) !important",
                                          fontFamily: "Arial, sans-serif",
                                          fontSize: "13px",
                                          fontWeight: "bold",
                                          padding: "10px 20px 5px",
                                          textAlign: "center",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        For Further Assistance:
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{
                                          borderCollapse: "collapse",
                                        }}
                                      >
                                        <table
                                          align="center"
                                          cellPadding="0"
                                          cellSpacing="0"
                                          data-ogsb="rgb(255, 255, 255)"
                                          style={{
                                            backgroundAttachment: "initial",
                                            backgroundClip: "initial",
                                            backgroundColor:
                                              "rgb(                                          38,                                          38,                                          38                                        ) !important",
                                            backgroundImage: "initial",
                                            backgroundOrigin: "initial",
                                            backgroundPosition: "initial",
                                            backgroundRepeat: "initial",
                                            backgroundSize: "initial",
                                            fontSize: "11px",
                                            margin: "0px auto",
                                            padding: "5px 4px",
                                            width: "100%",
                                          }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                data-ogsc="rgb(51, 51, 51)"
                                                style={{
                                                  color:
                                                    "rgb(                                                204,                                                204,                                                204                                              ) !important",
                                                  fontFamily:
                                                    "Arial, sans-serif",
                                                  fontSize: "11px",
                                                  fontWeight: "bold",
                                                  paddingBottom: "5px",
                                                  textAlign: "center",
                                                  verticalAlign: "middle",
                                                  width: "100%",
                                                }}
                                              >
                                                <a
                                                  data-ogsc="rgb(77, 144, 254)"
                                                  href="https://hhv3mkhg.r.ap-south-1.awstrack.me/L0/https:%2F%2Fin.bookmyshow.com%2Fhelp-centre/1/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/UI5ypSBJEyfejOa9uJyDM-rN39M=164"
                                                  style={{
                                                    color:
                                                      "rgb(                                                  14,                                                  114,                                                  220                                                ) !important",
                                                    display: "inline-block",
                                                    textDecoration: "none",
                                                  }}
                                                  target="_blank"
                                                >
                                                  Help Centre
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <img
          alt=""
          id="1721494576556116600_imgsrc_url_15"
          src="https://hhv3mkhg.r.ap-south-1.awstrack.me/I0/01090190d112842f-2a0c0cf7-6be3-49b2-bf75-7a44cf8248a1-000000/uSCF5zcaWpAzA9wdG2WrIWtBdTU=164"
          style={{
            display: "none",
            height: "1px",
            width: "1px",
          }}
        />
      </div>
      <div
        style={{
          clear: "both",
        }}
      />
    </div>
  );
};

export default TicketTemplate;