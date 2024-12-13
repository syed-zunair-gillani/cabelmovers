import React from 'react'
import IconBox from '../provider/icon-box'
function FeatureBox({ Plans }: any) {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
            {Plans?.map((plan: any) => {
                return (
                    <IconBox key={plan.id}
                        icon={plan.icon}
                        title={plan.title}
                        content={plan.details}
                    />
                )
            })}
        </div>
    )
}
export default FeatureBox