import MainEventSection from '../../components/pages/Main/MainEventSection'
import MainSecondNav from '@/components/pages/Main/MainSecondNav'
import MainProductList from '@/components/pages/Main/MainProductList'

async function Home() {
    return (
        <main>
            <MainSecondNav />
            <MainEventSection />
            <MainProductList />
        </main>
    )
}
export default Home
