import React, { Component } from 'react';
import { Accordion, Icon, Header } from 'semantic-ui-react';

export default class PrivacyPolicy extends Component {
  state = {
    activeIndex: 0
  }

  _handleClick = (event, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({
      activeIndex: newIndex
    })
  }


  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <Header as="h1">Privacy Policy</Header>
        <Header as="h3">Effective Date July 4th, 2018</Header>
        <Accordion fluid styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this._handleClick} >
            <Icon name='dropdown' />
            Policy For Revents
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
          <p>
            At Revents, the privacy of our visitors is of exteme importance to us. This privacy policy document outlines the types of personal information that are received and collected by us and how it is used.. 
            <br />
            <br />
            If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at joshualjohnson33@gmail.com
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this._handleClick}>
          <Icon name='dropdown' />
          Cookies and 3rd party 
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          We automatically collect certain types of usage information when visitors view our website or use our service. We may send one or more cookies -- a small text file containing a string of alphanumeric characters -- to your computer that uniquely identifies your browser and helps to log you in faster and enhance your navigation expererience through this product. A cookie may also convey information to us about how you use the Service, such as the pages you visit, links you click, events you're interested in and so on.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this._handleClick}>
          <Icon name='dropdown' />
          How we collect and use data
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            [Basically, we collect data to help us provide you with cool technology applications! We want to be open with you about that, so read this section.]
          </p>
          <br />
          <br />
          <p>
            In order to enhance our website and Services, we may collect the following types of information:
          </p>
          < br /><br />
          <p>
            Information Collected Through Technology. This information is the same as Cookies and 3rd party section above. We automatically collect certain types of usage information when visitors view our website or use our service. We may send one or more cookies -- a small text file containing a string of alphanumeric characters -- to your computer that uniquely identifies your browser and helps to log you in faster and enhance your navigation expererience through this product. A cookie may also convey information to us about how you use the Service, such as the pages you visit, links you click, events you're interested in and so on.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 3} index={3} onClick={this._handleClick}>
          <Icon name='dropdown' />
          Sharing Data
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            [Basically, we don't share any data unless required to by law or as a part of our internal business processes.]
          </p>
          <br />
          <p>
            Re-vents does not share user data with third-parties nor do we rent or sell any data or information for marketing purposes to any third party advertising networks.
          </p>
          < br />
          <p>
            Re-vents only shares user data in two limited circumstances. First, we may share user data with those who provide us technology services (e.g. web hosting and analytic services) but strictly for the prupose of carrying out their work for us to enable us to provide Services to you or your organization. Second, we may be required to share information with law enforcement or other third parties when compelled to do so by court order or other legal processes, to comply with statutes or regulations, to enforce our Terms of Service, or if we believe in good faith that the disclosure is necessary to protect the rights, property, or personal safety or our users.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 4} index={4} onClick={this._handleClick}>
          <Icon name='dropdown' />
          How We Store and Protect Data
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            [Basically, we store all of our data in the U.S. where we keep it safe and secure. We delete or transfer your data at your direction if you decide to no longer user our services.]
          </p>
          <br />
          <p>
            Re-vents maintains strict administrative, technical, and physical procedures to protect data stored in our servers, all of which are located in the U.S.
            Access to information is limited (through user/password protection and two factor authentication) to those employees who reuire it to perform their jobs. Also, we use inductry-standard Secure Socket Layer (SSL) encrpytion technology to safegaurd the account registration process and sign-up information. Our other security safeguards include but are not limited to: data encryption and physical access controls to buildings and files.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 5} index={5} onClick={this._handleClick}>
          <Icon name='dropdown' />
          Changes to our privacy policy
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            Re-vents may modify or update this privacy policy from time to time, so you should review this page periodically. If we change our privacy policy in any material manner, we will provide sufficient notice to you or your organization so that you have sufficient tiem to evaluate our change in practice.
          </p>
        </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}
