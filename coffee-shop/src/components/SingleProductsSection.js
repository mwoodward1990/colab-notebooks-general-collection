import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from "../util/router.js";
import { CartContext } from '../contexts/CartContext';
import { ProductsContext } from '../contexts/ProductsContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import BestSellersSection from '../components/BestSellersSection';
import HeroSection2 from "./../components/HeroSection2";
import Section from "./../components/Section";
//image
import coffee_shop_background from '../public/coffee_shop_background.jpg';
//parallax background
import { Parallax } from 'react-parallax';
import black_spheres_wallpaper from '../public/black_spheres_wallpaper.jpg';
//animations
import Fade from 'react-reveal/Fade';

export const SingleProductsSection = (props) => {
    const router = useRouter();
    const cart = useContext(CartContext);
    const {addProduct, increase, removeProduct, decrease, cartItems} = cart;
    const [products] = useContext(ProductsContext);
    const [product, setProduct] = useState([]);
    const id = router.location.state.id;
    console.log(id)

    const isInCart = product => {
      return !!cartItems.find(item => item.id === product.id);
    };

    function findId(data, idToLookFor){
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === idToLookFor) {
          setProduct(data[i]);
        }
    }}

    useEffect(() => {
      findId(products, id);
    });

    function handleOnClick(e){
      e.preventDefault();
      router.history.goBack();
    }

    console.log(product.variants)
  return (
    <>
      <HeroSection2
          bg=""
          textColor="light"
          size="lg"
          bgImage={coffee_shop_background}
          bgImageOpacity={1}
          title="Product Detail"
          subtitle=""
          buttonText="Product Detail"
          buttonColor="link"
          buttonOnClick={() => router.push('/menu')}
        />
        <Parallax opacity={0.6} bgImage={black_spheres_wallpaper} bgImageAlt="the cat" strength={400}>
        <Section
          bg={props.bg}
          textColor={props.textColor}
          size={props.size}
          bgImage={props.bgImage}
          bgImageOpacity={props.bgImageOpacity}
        >
          <Container>
            <Row className="align-items-center">
              <Col sm={12} md={6} lg={6}>
                {product.images && 
                  product.images.map(image => (
                    <Image src={image.src} alt={product.title} fluid={true} style={{height:'auto'}}/>
                ))}
              </Col>
              <Col sm={12} md={6} lg={6}>
                <h2>{product.title}</h2>
                {/* <span>${product.variants.price || "10.00"}</span> */}
                <p>
                  {product.description}
                </p>
                <div>
                  {
                    isInCart(product) && 
                    <Button 
                      onClick={() => increase(product)}
                      variant="secondary"
                    >
                      Add more
                    </Button>
                  }

                  {
                    !isInCart(product) && 
                    <Button 
                      onClick={() => addProduct(product)}
                      variant="secondary"
                    >
                      Add to cart
                    </Button>
                  }
                </div>
                <br />
                <div>
                  <Button variant="secondary" onClick={handleOnClick}>Back</Button>
                </div>
              </Col>
            </Row>
          </Container>
          </Section>
          <BestSellersSection
            bg=""
            textColor="light"
            size="md"
            bgImage="" 
            bgImageOpacity={0.7}
            title="Best Coffee Sellers"
            subtitle="Far far away, behind the wotf mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            products={products}
            addProduct={addProduct}
            removeProduct={removeProduct}
            increase={increase}
            decrease={decrease}
            cartItems={cartItems}
            router={router}
          />
        </Parallax>
    </>
  )
}

export default SingleProductsSection;