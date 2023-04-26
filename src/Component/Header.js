import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';
function Header() {
const [{ basket, user}, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

return (
  <div className="header">
    <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
    </Link>
    <div >
      <select
        aria-describedby="searchDropdownDescription"
        class="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown"
        data-nav-digest="Y2Ex0FDYtwBvLRafd9dRnatBcn4="
        data-nav-selected="0"
        id="searchDropdownBox"
        name="url"
        // style="display: block; top: 2.5px;"
        tabindex="0"
        title="Search in"
      >
        <option selected="selected" value="search-alias=aps">
          All Departments
        </option>
        <option value="search-alias=alexa-skills">Alexa Skills</option>
        <option value="search-alias=amazon-devices">Amazon Devices</option>
        <option value="search-alias=amazonfresh">Amazon Fresh</option>
        <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
        <option value="search-alias=warehouse-deals">Amazon Warehouse</option>
        <option value="search-alias=appliances">Appliances</option>
        <option value="search-alias=mobile-apps">Apps &amp; Games</option>
        <option value="search-alias=arts-crafts">
          Arts, Crafts &amp; Sewing
        </option>
        <option value="search-alias=audible">
          Audible Books &amp; Originals
        </option>
        <option value="search-alias=automotive">
          Automotive Parts &amp; Accessories
        </option>
        <option value="search-alias=baby-products">Baby</option>
        <option value="search-alias=beauty">Beauty &amp; Personal Care</option>
        <option value="search-alias=stripbooks">Books</option>
        <option value="search-alias=popular">CDs &amp; Vinyl</option>
        <option value="search-alias=mobile">
          Cell Phones &amp; Accessories
        </option>
        <option value="search-alias=fashion">
          Clothing, Shoes &amp; Jewelry
        </option>
        <option value="search-alias=fashion-womens">
          &nbsp;&nbsp;&nbsp;Women
        </option>
        <option value="search-alias=fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
        <option value="search-alias=fashion-girls">
          &nbsp;&nbsp;&nbsp;Girls
        </option>
        <option value="search-alias=fashion-boys">
          &nbsp;&nbsp;&nbsp;Boys
        </option>
        <option value="search-alias=fashion-baby">
          &nbsp;&nbsp;&nbsp;Baby
        </option>
        <option value="search-alias=collectibles">
          Collectibles &amp; Fine Art
        </option>
        <option value="search-alias=computers">Computers</option>
        <option value="search-alias=financial">Credit and Payment Cards</option>
        <option value="search-alias=edu-alt-content">
          Digital Educational Resources
        </option>
        <option value="search-alias=digital-music">Digital Music</option>
        <option value="search-alias=electronics">Electronics</option>
        <option value="search-alias=lawngarden">Garden &amp; Outdoor</option>
        <option value="search-alias=gift-cards">Gift Cards</option>
        <option value="search-alias=grocery">Grocery &amp; Gourmet Food</option>
        <option value="search-alias=handmade">Handmade</option>
        <option value="search-alias=hpc">
          Health, Household &amp; Baby Care
        </option>
        <option value="search-alias=local-services">
          Home &amp; Business Services
        </option>
        <option value="search-alias=garden">Home &amp; Kitchen</option>
        <option value="search-alias=industrial">
          Industrial &amp; Scientific
        </option>
        <option value="search-alias=prime-exclusive">Just for Prime</option>
        <option value="search-alias=digital-text">Kindle Store</option>
        <option value="search-alias=fashion-luggage">
          Luggage &amp; Travel Gear
        </option>
        <option value="search-alias=luxury">Luxury Stores</option>
        <option value="search-alias=magazines">Magazine Subscriptions</option>
        <option value="search-alias=movies-tv">Movies &amp; TV</option>
        <option value="search-alias=mi">Musical Instruments</option>
        <option value="search-alias=office-products">Office Products</option>
        <option value="search-alias=courses">Online Learning</option>
        <option value="search-alias=pets">Pet Supplies</option>
        <option value="search-alias=luxury-beauty">Premium Beauty</option>
        <option value="search-alias=instant-video">Prime Video</option>
        <option value="search-alias=smart-home">Smart Home</option>
        <option value="search-alias=software">Software</option>
        <option value="search-alias=sporting">Sports &amp; Outdoors</option>
        <option value="search-alias=specialty-aps-sns">
          Subscribe &amp; Save
        </option>
        <option value="search-alias=subscribe-with-amazon">
          Subscription Boxes
        </option>
        <option value="search-alias=tools">Tools &amp; Home Improvement</option>
        <option value="search-alias=toys-and-games">Toys &amp; Games</option>
        <option value="search-alias=under-ten-dollars">Under $10</option>
        <option value="search-alias=videogames">Video Games</option>
        <option value="search-alias=wholefoods">Whole Foods Market</option>
      </select>
    </div>


    
    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <SearchIcon className="header__searchIcon" />
    </div>
    <div className="header__nav">
      <Link to={!user && "/login"} className="header__clearlink">
        <div onClick={handleAuthenticaton} className="header__option">
          <span className="header__optionLineOne">
            Hello {!user ? "Guest" : user.email}
          </span>
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
      </Link>
      <Link to="/orders" className="header__clearlink">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>
      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>
      <Link to="/checkout" className="header__clearlink">
        <div className="header__optionBasket">
          <AddShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  </div>
);
}
export default Header

