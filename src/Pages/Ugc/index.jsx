import React from 'react'

function Ugc() {
  return (
    <div className="flex flex-col">
        <p className="text-2xl font-bold text-center my-3 uppercase">What is UGC?</p>
        <p>UGC, otherwise known as user-generated content, is content created organically and authentically by people vs. curated by brands.</p>
        <p className="text-2xl font-bold text-center my-3 uppercase">Why UGC?</p>
        <p>UGC is a transparent, reliable and authentic way to create engaging content that an audience trusts vs. heavily curated content promoted directly by brands.</p>
        <p className="text-2xl font-bold text-center my-3 uppercase">The Stats</p>
        <ul className="list-disc">
            <li className="list-inside">90% of consumers say authenticity is important when deciding which brands they like and support.</li>
            <li className="list-inside">Millennials trust UGC 50% more than original content generated by brands.</li>
            <li className="list-inside">74% of consumers rely on social media to inform their purchasing decisions.</li>
            <li className="list-inside">Consumers are 2.5x more likely to say user-generated content is authentic compared to brand-created content.</li>
        </ul>

        <div className="flex flex-col">
            <p className="text-2xl font-bold text-center my-3 uppercase">Rates and Packages</p>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-1 flex flex-col">
                    <p className="text-xl font-bold text-center my-3 uppercase">Videos</p>
                    <ul className="list-disc">
                        <li className="list-inside">$400</li>
                        <li className="list-inside">$700</li>
                        <li className="list-inside">$1600</li>
                    </ul>
                </div>
                <div className="col-span-1 flex flex-col">
                    <p className="text-xl font-bold text-center my-3 uppercase">Pictures</p>
                    <ul className="list-disc">
                        <li className="list-inside">$300</li>
                        <li className="list-inside">$650</li>
                        <li className="list-inside">$1300</li>
                    </ul>
                </div>
                <div className="col-span-1 flex flex-col">
                    <p className="text-xl font-bold text-center my-3 uppercase">Bundles</p>
                    <ul className="list-disc">
                        <li className="list-inside">1 video & 2 pictures $800</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Ugc