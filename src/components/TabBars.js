import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import Teams from "./Teams";
import Testimonial from "./Testimonial";
import Blogs from "./Blogs";

const TabBars = () => {
  const [value, setValue] = useState(0);

  const handleValue = (val) => {
    setValue(val);
  };

  return (
    <Container>
      <Typography sx={{ fontSize: "25px", color: "var(--mateblack)" }}>
        Fly Far tech
      </Typography>

      <Box sx={{ width: "800px", mt: "50px" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          <a>
            {" "}
            <li
              className={value === 0 ? "li-style-active" : "li-style"}
              onClick={() => handleValue(0)}>
              Home
            </li>
          </a>

          <a>
            <li
              className={value === 1 ? "li-style-active" : "li-style"}
              onClick={() => handleValue(1)}>
              Projects
            </li>
          </a>

          <a>
            <li
              className={value === 2 ? "li-style-active" : "li-style"}
              onClick={() => handleValue(2)}>
              Services
            </li>
          </a>

          <a>
            <li
              className={value === 3 ? "li-style-active" : "li-style"}
              onClick={() => handleValue(3)}>
              Teams
            </li>
          </a>

          <a>
            <li
              className={value === 4 ? "li-style-active" : "li-style"}
              onClick={() => handleValue(4)}>
              Testimonials
            </li>
          </a>

          <a>
            {" "}
            <li
              className={value === 5 ? "li-style-active" : "li-style"}
              onClick={() => handleValue(5)}>
              Blogs
            </li>
          </a>
        </ul>
      </Box>

      {/* components form */}
      <Box>
        {value === 0 && <Home />}
        {value === 1 && <Projects />}
        {value === 2 && <Services />}
        {value === 3 && <Teams />}
        {value === 4 && <Testimonial />}
        {value === 5 && <Blogs />}
      </Box>
    </Container>
  );
};

export default TabBars;
