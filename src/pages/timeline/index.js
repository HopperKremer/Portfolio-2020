import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HamburgerMenu from '../../components/hamburger_menu';
import Particles from 'react-particles-js';
import particles from '../../const/about_particle.js';
import Animate from 'react-smooth';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "black",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid gray",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#222222",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#ffe1ba",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "LightSlateGray",
  },
  subtitle1: {
    color: "LightSlateGray",
  },
  // mainContainer: {
  //   backgroundColor: "black",
  // }
}));

const Resume = () => {
  const classes = useStyles();
  return (

    <Box component="header" className={classes.mainContainer}>
      <HamburgerMenu />

      <Animate to="1" from="0" attributeName="opacity">
           <Particles
            params={particles}
            className="particle"
          />
      
      <Typography variant="h4" align="center" className={classes.heading}>
        Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
      <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            UB Hacks Hackathon Buffalo NY
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Binary Tape Project
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Led group to develop an augmented reality ruler for iOS <br/> <a href="https://devpost.com/software/binarytape"> Check it out here! </a>
          </Typography>
        </Box>


        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Studied Computer Science
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          SUNY Schenectady College
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Maintained a high GPA and tutored Computer Science privately and also worked as a tutor in the Math Lab. Curriculum included: Data Structures and Algorithms, C++/UNIX, Java, Discrete Mathematics, and Calculus.
            </Typography>
        </Box>




        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Graduated with honors
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            SUNY Schenectady College
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            A.S. Computer Science
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Relocated to Raleigh, NC
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Intern
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Networked immediately, worked with local React developer Christopher Hilla. Contracted briefly with IBM IT during the summer.
          </Typography>
        </Box>


        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            React & Node Training
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Sollers College
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Completed an aggressive 75-hour training curriculum designed by hiring partners and experts with over a decade of IT industry experience. Completed the React and Node.js Developer course. Tested and deployed code, stored data using MongoDB, built an end-to-end application and other capstone projects based on real business scenarios. Learned advanced React topics like higher order components, hooks, reconciliation, Refs, DOM, and uncontrolled components.

          </Typography>
        </Box>




        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Engineer for Quest Technology
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Infinity & Beyond
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            - Modified program plugins and config files.
            <br/>
            - Designed programs in C# to parse logs and emails and accept a custom regex.
            <br/>
            - Managed projects and collaborated with the team using git version control
            <br/>
            - Facilitated creation of new mailboxes and tested monitoring systems
            <br/>
            - Ran SQL queries and interacted with databases using LINQ and C#
            <br/>
            - Designed Blazor/Mudblazor UI’s

          </Typography>
        </Box>




        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          ???
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            The Future
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Infinity & Beyond
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I look forward to working on cutting edge applications and making a difference in my community and around the world.
            <br/> <a href="https://expo.dev/@hopperkremer/my-intro?fbclid=IwAR1mmZVXXxV2l5sfaxKxgBWvP0ngWmIy1i8uN6bn4TAuqKPrv7cgfE6RNG0"> Check it out my latest app on expo! </a>
          </Typography>
        </Box>


      </Box>
      </Animate>
    </Box>
  );
};

export default Resume;
