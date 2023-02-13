import { Card, Col, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import CommentArea from "./CommentArea";

const AllTheBooks = () => {
  console.log(fantasy);

  return (
    <Row>
      <Col xs={8} md={8}>
        {fantasy.map((book) => {
          return (
            <Col xs={6} md={6} key={book.asin}>
              <Card className="book-cover">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Col>
      <Col xs={4} md={4}>
        <CommentArea />
      </Col>
    </Row>
  );
};

export default AllTheBooks;
