import React from "react";
import Title from "../../components/Title";
import { Grid } from "@mui/material";

function Video() {
  const videoList = [
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/jlhfHHbRils?si=YULSE2Ydwn8LXrjP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/DLkxLhc939g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/e3wmDAArxps"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/nU0MdwcRx7c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/igMViq71phE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/oLUG224MhNU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/-WccvebdlNE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/WReq0nrXWSw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/PZ6c2Yi3xNE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/LFNSg_YV1HU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/bk8p_XvxZvg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/EFxW9mHnNF8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/oEF6Yqer-o4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/hf_z52dVbws"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/27h2naTcVh0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/EZw3UEbw0v8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      iframe: (
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/6z9v0IJ8Ms0?si=4dEUGbwiEWh4iSZH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ];
  return (
    <>
      <Title text="Video" />

      <Grid
        container
        rowSpacing={5}
        columnSpacing={2}
        my={2}
      >
        {videoList.map((item) => (
          <Grid
            item
            xs
            md={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {item.iframe}
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Video;
