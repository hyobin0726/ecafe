import FooterImage from '@/images/FooterImage.png'
import Image from 'next/image'
import FooterButtons from './FotterButtons'

function Footer() {
    return (
        <>
            <footer className="">
                <div className="px-4" style={{ backgroundColor: '#717178' }}>
                    <div className="table w-full min-h-14 py-3 items-center">
                        <Image src={FooterImage} alt="footerImage" className="w-10 h-auto" />
                        <p className="table-cell relative text-xs text-white align-middle ">
                            <span>개발 : 박효빈</span>
                            <br />
                            <span className="">e-mail : hyobin0726@naver.com</span>
                        </p>
                        <div className="table-cell text-right">
                            <a
                                href="tel:010-1234-5678"
                                className="inline-block min-h-6 my-2 ml-1 px-3 text-white "
                                style={{ border: '1px solid #66666d', borderRadius: '3px', lineHeight: '22px' }}
                            >
                                <em className="font-normal not-italic">전화걸기</em>
                            </a>
                            <a
                                href="https://talk.ssg.com/webchat/?gateType=cs"
                                className="inline-block min-h-6 my-2 ml-1 px-3 text-white "
                                style={{ border: '1px solid #66666d', borderRadius: '3px', lineHeight: '22px' }}
                            >
                                <em className="font-normal not-italic">1:1 고객센터</em>
                            </a>
                        </div>
                    </div>
                </div>
                <FooterButtons />
                <div className="px-5 h-48">
                    <div className="mt-2">
                        <span style={{ fontSize: '11px', color: '#414141' }}>(주)PHB.COM</span>
                        <div style={{ fontSize: '10px', color: '#888' }}>
                            대표자: 박효빈 사업자등록번호: 000-00-00000 통신판매업 신고번호: 제0000-서울강남-0000호
                            사업자 정보확인 개인정보보호 책임자: 박효빈 주소: 서울특별시 강남구 테헤란로 호스팅서비스
                            사업자 : (주)PHB.COM
                        </div>
                    </div>
                    <div className="mt-2">
                        <p style={{ fontSize: '11px', color: '#414141' }}>
                            우리은행 채무지급보증 안내{' '}
                            <a style={{ display: 'inline-block', fontSize: '10px' }}>서비스가입사실 확인</a>
                        </p>
                        <p style={{ fontSize: '10px', color: '#888' }}>
                            당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급 보증 계약을 체결하여 안전거래를
                            보장하고 있습니다.
                        </p>
                    </div>

                    <div style={{ fontSize: '10px', color: '#888' }}>
                        <p className="mcom_noti_txt">
                            ㈜PHB.COM은 PHB.COM 실시간 항공권 서비스의 통신판매중개자로서 거래 당사자가 아니며, 입점
                            판매사가 등록한 상품 정보 및 거래에 대해 책임을 지지 않습니다.
                        </p>
                        <p className="mcom_noti_txt">
                            ㈜PHB.COM 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한 무단 복제, 전송, 배포,
                            스크래핑 등의 행위는 저작권법, 콘텐츠사업 진흥법 등에 의하여 엄격히 금지됩니다.
                        </p>
                    </div>
                    <p style={{ fontSize: '10px', color: '#888' }}>Copyright ⓒ PHB.COM Corp. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
