import {CardWithForm,DropdownMenuCheckboxes} from '@/components/index.js'

export default function Home() {
    return (
        <main className="home-page">
            <section className="showcase">
                <div className="container">
                    <h2> hello world</h2>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <section>
                <div className="container">
                    <DropdownMenuCheckboxes defaultItems={[]}/>
                    <br />
                    <br />
                    <br />
                    <CardWithForm/>
                </div>
            </section>
        </main>
    );
}
