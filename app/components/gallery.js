import React, { Component } from "react";

class Gallery extends Component {
  render() {
    let alternate = "http://via.placeholder.com/350x150";
    return (
      <div>
        {this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;

          return (
            <a href={infoLink} target="_blank" key={index} className="book">
              <img
                src={
                  imageLinks !== undefined ? imageLinks.thumbnail : alternate
                }
                alt="Book Image Missing"
                className="book-img"
              />
              <div className="book-text">
                {title}
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
