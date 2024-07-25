import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import logos from './assets/logo.svg';
import inst from './assets/instagram.svg'
import face from './assets/facebook.svg'
import link from './assets/linkedin.svg'
import yt from './assets/youtube.svg'
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  }

  render() {
    const {
      supportedLanguages,
      onLanguageSelected,
      logo,
      intl,
    } = this.props;
    const showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
    const { config } = this.context;

    return (
      <footer class="tw-text-white tw-bg-neutral-1000 tw-pt-[90px]">
        <div class="tw-container tw-px-[24px] md:tw-w-full">
          <div class="">
            <div className='xl:tw-hidden'>
              <img src={logos} alt='Logo Prometheus' className='tw-h-[74px] tw-w-[278px] md:tw-h-[90px] md:tw-w-[578px]' />
            </div>

            <div className='md:tw-grid md:tw-grid-cols-3 md:tw-gap-[56px] md:tw-mt-[32px] xl:tw-grid-cols-4'>
              <div className='tw-mb-[32px]'>
                <p className='tw-font-grotesk tw-font-medium tw-mb-[32px] tw-text-[18px] leading-[17.28px] md:tw-hidden' >Про нас</p>
                <a href="https://prometheus.org.ua/about-us/" className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px]'>Про нас<br /></a>
                <a href="https://prometheus.org.ua/corporate-learning/" className='tw-font-grotesk  tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px]'>Корпоративне навчання<br /></a>
                <a href="https://prometheus.org.ua/partnership/" className='tw-font-grotesk  tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px]'>Співпраця<br /></a>
                <a href="#" className='tw-font-grotesk  tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px]'>Політика повернення коштів<br /></a>
              </div>
              <div className='md:tw-order-first'>
                <div className='tw-mb-[32px]'>
                  <p className='tw-font-grotesk tw-font-medium tw-mb-[32px] tw-text-[18px] leading-[17.28px] md:tw-hidden'>Як з нами зв’язатися</p>
                  <p className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px]'>03067, м. Київ, бул.<br /> Вацлава Гавела, 5г, к. 2</p>
                  <p className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px]'>(093) 6691691</p>
                  <a href="#" className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px]'>info@prometheus.org.ua</a>
                </div>

                <div className='tw-flex tw-gap-[16px] tw-mb-[32px] '>
                  <a href='https://www.facebook.com/prometheusmooc'><img src={face} alt='facebook-icon' /></a>
                  <a href='https://www.instagram.com/prometheus.ua'><img src={inst} alt='instagra-icon' /></a>
                  <a href='https://www.linkedin.com/school/prometheus-mooc/mycompany/'><img src={link} alt='linkedin-icon' /></a>
                  <a href='https://www.youtube.com/@Prometheus_Ukraine/videos'><img src={yt} alt='youtube-icon' /></a>
                </div>
              </div>
              <div className='tw-hidden xl:tw-block'>
                <a href="https://prometheus.org.ua/privacy-policy/" className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px]'>Політика конфіденційності<br /></a>
                <a href="https://prometheus.org.ua/faq/" className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px]'>Допомога<br /></a>
                <a href="https://prometheus.org.ua/offert/" className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px]'>Договір публічної оферти<br /></a>
              </div>
              <div className='tw-flex tw-gap-[9px] tw-mb-[32px] md:tw-items-end md:tw-justify-items-end md:tw-flex-col'>
                <a href="https://itunes.apple.com/us/app/prometheus-online-courses/id1213523151" ><img src="https://prometheus.org.ua/wp-content/themes/prometheus/assets/images/app-store.svg?x38305" alt="App Store" className='tw-h-[50px] md:tw-mb-[5px]' /></a>
                <a href="https://play.google.com/store/apps/details?id=org.prometheus.android" ><img src="https://prometheus.org.ua/wp-content/themes/prometheus/assets/images/google-play.svg?x38305" alt="Google Play" className='tw-h-[50px]' /></a>
              </div>
            </div>
            <div className='md:tw-flex md:tw-gap-[35px]'>
              <div className='tw-flex tw-justify-center tw-flex-wrap tw-gap-[24px] tw-mb-[32px] xl:tw-hidden'>
                <a href="https://prometheus.org.ua/privacy-policy/" className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[14px] leading-[15.36px]'>Політика конфіденційності</a>
                <a href="https://prometheus.org.ua/faq/" className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[14px] leading-[15.36px]'>Допомога</a>
                <a href="https://prometheus.org.ua/offert/" className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[14px] leading-[15.36px]'>Договір публічної оферти</a>
              </div>
              <div className='xl:tw-grid xl:tw-grid-cols-2 xl:tw-gap-[50px] xl:tw-items-end xl:tw-justify-items-end'>
                <div className='tw-hidden xl:tw-block '>
                  <img src={logos} alt='Logo Prometheus' className='tw-h-[110px] tw-w-[721px]' />
                </div>
                <div className=''>
                  <p href="https://prometheus.org.ua/" className='tw-font-grotesk tw-text-white tw-font-normal tw-text-[16px] leading-[15.36px] tw-text-center'>&copy; {new Date().getFullYear()} Prometheus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
