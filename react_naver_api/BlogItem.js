import React from "react";

const BlogItem = ({ item }) => {
  const { title, link, description, bloggername, bloggerlink, postdate } = item;
  return (
    <div>
      <table border="1">
        <tr>
          <th width="200px">title</th>
          <td width="700px">{title}</td>
        </tr>
        <tr>
          <th width="200px">link</th>
          <td width="700px">
            <a href="{link}">{link}</a>
          </td>
        </tr>
        <tr>
          <th width="200px">description</th>
          <td width="700px">{description}</td>
        </tr>
        <tr>
          <th width="200px">bloggername</th>
          <td width="700px">{bloggername}</td>
        </tr>
        <tr>
          <th width="200px">bloggerlink</th>
          <td width="700px">
            <a href="{bloggerlink}">{bloggerlink}</a>
          </td>
        </tr>
        <tr>
          <th width="200px">postdate</th>
          <td width="700px">{postdate}</td>
        </tr>
      </table>
    </div>
  );
};

export default BlogItem;
