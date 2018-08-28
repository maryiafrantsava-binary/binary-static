import React from 'react';
import { BoxOverlayImage } from '../../_common/components/box_row.jsx';
import ImageSlider from '../../_common/components/image_slider.jsx';

const Malta = () =>  (
    <div className='static_full location-malta'>
        <div className='introduction'>
            <div className='container gr-row gr-padding-20'>
                <div className='gr-12 gr-padding-20 center-text'>
                    <h1>{it.L('Malta')}</h1>
                    <h4 className='subheader'>{it.L('Historical Mediterranean island')}</h4>
                </div>
                <div className='gr-12 gr-padding-20 center-text'>
                    <h2>{it.L('Introduction')}</h2>
                </div>
                <div className='gr-12 gr-centered'>
                    <div className='gr-row'>
                        <div className='gr-5 gr-12-p gr-12-m'>
                            <img className='responsive' src={it.url_for('images/pages/careers/malta/introduction-malta.jpg')} />
                        </div>
                        <div className='gr-7 gr-12-p gr-12-m'>
                            <p className='no-margin-top'>{it.L('The Republic of Malta is an island country in Southern Europe — located approximately 80km south of Italy. Its rich, colourful history can be traced back thousands of years to the Neolithic period.')}</p>
                            <p>{it.L('Malta’s strategic location in the Mediterranean Sea saw it occupied by a number of foreign powers, including the Greeks, Romans, Arabs, French, and most recently, the British. It gained independence from the British in 1964, and joined the European Union in 2004. Today, Malta is a popular tourist destination and a high-income country powered by an industrialised, service-based economy.')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='living fill-bg-color'>
            <div className='container gr-row gr-padding-20 center-text'>
                <div className='gr-12 gr-padding-20 center-text'>
                    <h2>{it.L('Living in Malta')}</h2>
                </div>
                <div className='gr-12'>
                    <div className='container gr-padding-10 center-text'>
                        <ImageSlider
                            images={[
                                {
                                    url    : 'images/pages/careers/malta/smallest-capital.jpg',
                                    caption: 'Malta is one of the most densely-populated countries in the world with the smallest capital (Valletta) in the European Union. Maltese and English are the country’s official languages, while Italian is also widely spoken. Malta has plenty of sunshine throughout the year and enjoys a mild climate.',
                                },
                                {
                                    url    : 'images/pages/careers/malta/festivities.jpg',
                                    caption: 'Life in Malta moves at a slower pace with a number of colourful festivities and religious holidays that you can look forward to every year. Some of the most popular ones include the Notte Bianca, the Malta Jazz Festival, Christmas, and Easter. Malta has no shortage of museums, archaeological sites, and other places of interest if you’re looking for a culture fix.',
                                },
                                {
                                    url    : 'images/pages/careers/malta/cost-of-living.jpg',
                                    caption: 'The cost of living in Malta is relatively affordable; food and public transportation are much cheaper than what you’ll find in a major European city. Malta offers free healthcare but queues at public healthcare facilities are less than ideal. Fortunately, health insurance is easily affordable and provides you with access to private clinics and hospitals.',
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='misc'>
            <div className='container gr-row gr-padding-20 center-text'>
                <div className='gr-12 gr-padding-20 center-text'>
                    <h2>{it.L('Can\'t miss in Malta')}</h2>
                </div>
                <BoxOverlayImage
                    title={it.L('Lush living')}
                    text={it.L('Cyberjaya expertly combines green lungs and modern amenities to give you the ultimate work-life balance.')}
                    img_src={it.url_for('images/pages/careers/cyberjaya/lush-living.jpg')}
                />
                <BoxOverlayImage
                    alignment='right'
                    title={it.L('Cultural diversity')}
                    text={it.L('Expats and international students make up more than 10 of Cyberjaya\'s vibrant population.')}
                    img_src={it.url_for('images/pages/careers/cyberjaya/cultural-diversity.jpg')}
                />
                <BoxOverlayImage
                    title={it.L('Putrajaya')}
                    text={it.L('Located 10 minutes away, Malaysia\'s intelligent garden city offers stunning greenery and exquisite structures.')}
                    img_src={it.url_for('images/pages/careers/cyberjaya/putrajaya.jpg')}
                />
            </div>
        </div>
    </div>
);

export default Malta;
