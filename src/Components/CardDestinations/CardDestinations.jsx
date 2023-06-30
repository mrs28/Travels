import styles from "./CardDestinations.module.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Like from "../Layouts/public/Like/Like";
import { useEffect, useState } from "react";
import { list } from "../../Services/destinations";

const CardDestinations = () => {
  const [cards, setCards] = useState([]);

  const getDestinations = async () => {
    const destinations = await list();
    setCards(Object.values(destinations));
  };

  useEffect(() => {
    getDestinations();
  }, []);
  // const cards = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.cardDestinations}>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={6}>
          {cards
            .filter((elem) => elem.status === "VISIBLE")
            .map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  className={styles.cardContainer}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    width={400}
                    height={300}
                    component="img"
                    // sx={{
                    //   // 16:9
                    //   pt: "56.25%",
                    // }}
                    image={card.image}
                    alt="random"
                  />
                  <Like />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <div className={styles.cardItem}>
                      <Typography
                        className={styles.cardItemDestination}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {card.destination}
                      </Typography>

                      <Typography
                        align="left"
                        className={styles.cardItemPrice}
                        gutterBottom
                        variant="h6"
                        component="h2"
                      >
                        {`$ ${card.price}`}
                      </Typography>
                    </div>

                    <Typography align="justify" variant="body2">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>

      {/* <img src="" alt="" />
      <p className={styles.textCard}> {text} </p> */}
    </div>
  );
};

export default CardDestinations;
