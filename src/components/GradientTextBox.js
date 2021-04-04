import "./../global.css";
import "./GradientTextBox.css";
import { Box, Typography } from "@material-ui/core";

function GradientTextBox(props) {
  const className = props.color + "-" + props.number;

  return (
    <Box className={"gradient-text-box " + className}>
      <Box className="gradient-text-box-content rows">
        <Typography
          className="gradient-text-box-title"
          variant="h6"
          color="primary"
        >
          {props.number} {props.title}
        </Typography>
        <Typography
          className="gradient-text-box-body"
          variant="body"
          color="primary"
        >
          {props.body}
        </Typography>
      </Box>
    </Box>
  );
}

export default GradientTextBox;
