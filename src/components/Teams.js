import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Teams = () => {
  const [videos, setVideos] = useState({
    design: "",
    code: "",
    build: "",
    deploy: "",
  });

  const handleChange = (e) => {
    setVideos((prevVideos) => ({
      ...prevVideos,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Typography sx={{ fontSize: "20px", mt: "25px" }}>Teams</Typography>
      <form>
        <Box sx={{ width: "100%", mt: "30px" }}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="design">Name</label>
                <Box style={{ marginTop: "5px" }}>
                  <Box style={{ marginTop: "5px" }}>
                    <input
                      required
                      // onChange={onChangeFile}
                      placeholder="Enter Country Name"
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        borderRadius: "2px",
                        color: "var(--primary-color)",
                        border: "2px solid var(--primary-color)",
                        width: "100%",
                      }}
                      className="customPlaceholderColor"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="design">Designations</label>
                <Box style={{ marginTop: "5px" }}>
                  <Box style={{ marginTop: "5px" }}>
                    <input
                      required
                      // onChange={onChangeFile}
                      placeholder="Enter Project Name"
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        borderRadius: "2px",
                        color: "var(--primary-color)",
                        border: "2px solid var(--primary-color)",
                        width: "100%",
                      }}
                      className="customPlaceholderColor"
                    />
                  </Box>
                </Box>
              </Box>
              <style>
                {`
    .customPlaceholderColor::placeholder {
      color: var(--primary-color);
    }
    `}
              </style>
            </Grid>

            <Grid item md={3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="design">Profile Image</label>
                <Box style={{ marginTop: "5px" }}>
                  <Box style={{ marginTop: "5px" }}>
                    <input
                      type="file"
                      required
                      // onChange={onChangeFile}
                      placeholder="Enter Sur Name"
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        borderRadius: "2px",
                        color: "var(--primary-color)",
                        border: "2px solid var(--primary-color)",
                        width: "100%",
                      }}
                      className="customFileType"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3} sx={{visibility:"hidden"}}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="design">Customer Count</label>
                <Box style={{ marginTop: "5px" }}>
                  <Box style={{ marginTop: "5px" }}>
                    <input
                      type="file"
                      required
                      // onChange={onChangeFile}
                      placeholder="Enter Sur Name"
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        borderRadius: "2px",
                        color: "var(--primary-color)",
                        border: "2px solid var(--primary-color)",
                        width: "100%",
                      }}
                      className="customFileType"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item md={3}>
              <Button
                sx={{
                  width: "100%",
                  bgcolor: "var(--green-color)",
                  borderRadius: "2px",
                  color: "var(--white)",
                  fontSize: "12px",
                  textTransform: "none",
                  mt:"20px",
                  pt: "8px",
                  pb: "8px",
                  ":hover": {
                    bgcolor: "var(--lightgreen-color)",
                  },
                }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: "50px" }} className="balance-transaction">
          <table>
            <thead>
              <tr
                style={{
                  backgroundColor: "var(--table-head)",
                  fontSize: "14px",
                }}>
                <th
                  style={{
                    color: "var(--white)",
                    fontSize: "14px",
                    borderRadius: "5px 0px 0px 0px",
                  }}>
                  Serial Number
                </th>
                <th style={{ color: "var(--white)", fontSize: "14px" }}>
                  Videos
                </th>

                <th
                  style={{
                    color: "var(--white)",
                    fontSize: "14px",
                    borderRadius: "0px 5px 0px 0px",
                  }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    backgroundColor: "var(--light-blue)",
                    borderBottom: "1px solid var(--primary-color)",
                    paddingLeft: "30px",
                  }}
                  data-column="Staff name">
                  01
                </td>
                <td
                  style={{
                    backgroundColor: "var(--light-blue)",
                    borderBottom: "1px solid var(--primary-color)",
                  }}
                  data-column="Join at">
                  Video 1.pmp4
                </td>
                <td
                  style={{
                    backgroundColor: "var(--light-blue)",
                    borderBottom: "1px solid var(--primary-color)",
                  }}
                  data-column="Email">
                  <EditIcon sx={{ color: "var(--green-color)" }} />
                  <DeleteIcon sx={{ color: "var(--tomato-color)" }} />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "var(--light-blue)",
                    borderBottom: "1px solid var(--primary-color)",
                    paddingLeft: "30px",
                  }}
                  data-column="Staff name">
                  02
                </td>
                <td
                  style={{
                    backgroundColor: "var(--light-blue)",
                    borderBottom: "1px solid var(--primary-color)",
                  }}
                  data-column="Join at">
                  Video 1.pmp4
                </td>
                <td
                  style={{
                    backgroundColor: "var(--light-blue)",
                    borderBottom: "1px solid var(--primary-color)",
                  }}
                  data-column="Email">
                  <EditIcon sx={{ color: "var(--green-color)" }} />
                  <DeleteIcon sx={{ color: "var(--tomato-color)" }} />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "var(--light-blue)",
                    paddingLeft: "30px",
                  }}
                  data-column="Staff name">
                  03
                </td>
                <td
                  style={{ backgroundColor: "var(--light-blue)" }}
                  data-column="Join at">
                  Video 1.pmp4
                </td>
                <td
                  style={{ backgroundColor: "var(--light-blue)" }}
                  data-column="Email">
                  <EditIcon sx={{ color: "var(--green-color)" }} />
                  <DeleteIcon sx={{ color: "var(--tomato-color)" }} />
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </form>
    </>
  );
};

export default Teams;
