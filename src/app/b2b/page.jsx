import { Footer } from '@/components/Footer'
import { Header2 } from '@/components/Header2'
import HeaderSection from '@/components/HeaderSection'
import { Container } from '@/components/Container'
import Sidebar from '@/components/Sidebar'
import ChannelsB2C from '@/components/features/ChannelsB2C'
import ChannelsB2B from '@/components/features/ChannelsB2B'

export default function b2b() {
    return (
        < div className=' bg-slate-50'>
            <div className="bg-blue-950 py-12">
                <Header2 />
            </div>
            <Container>
                <div className="flex flex-col lg:flex-row items-start w-full lg:gap-x-12 ">
                    <div className='lg:col-span-1  sticky top-0 lg:h-screen py-6'>
                        <Sidebar />
                    </div>
                    <div className="col-span-2 flex-1">
                        <div id="channelsB2C">
                            <ChannelsB2B />
                        </div>

                    </div>
                </div>
            </Container>
            <Footer />

        </div>
    )
}
