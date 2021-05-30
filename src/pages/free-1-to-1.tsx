import { Layout, SEO } from '@/components/index';
import Head from 'next/head';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

const FreeOneToOne = () => {
    const [title, setTitle] = useState('Free 1 to 1 Training | TheBinaryGuy');
    const [alertColor, setAlertColor] = useState<string | undefined>();
    const [alertMessage, setAlertMessage] = useState<string | undefined>();
    const [showAlert, setShowAlert] = useState(false);
    const [email, setEmail] = useState<string | undefined>();
    const [phone, setPhone] = useState<string | undefined>();
    const [firstName, setFirstName] = useState<string | undefined>();
    const [lastName, setLastName] = useState<string | undefined>();
    const [timePref, setTimePref] = useState<string | undefined>('Morning');

    const handleQuery = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            const resp = await fetch('/api/query', {
                method: 'POST',
                body: JSON.stringify({
                    queryFor: 'Free One To One Training',
                    email,
                    firstName,
                    lastName,
                    queryDetails: {
                        phone,
                        timePref
                    }
                })
            });

            if (!resp.ok) {
                setAlertColor('red');
                setAlertMessage(
                    'Something went wrong! Please try again later.'
                );
            } else {
                setAlertColor('green');
                setAlertMessage(
                    "Thank you for your interest, I'll get back to you shortly!"
                );
            }
        } catch {
            setAlertColor('red');
            setAlertMessage('Something went wrong!');
        }
        setShowAlert(true);
        return;
        console.log(email);
        console.log(phone);
        console.log(firstName);
        console.log(lastName);
        console.log(timePref);
    };

    const changeState = <T extends unknown>(
        setter: Dispatch<SetStateAction<T>>,
        value: T
    ) => {
        setter(value);
    };

    return (
        <>
            <Head>
                <SEO title={title} />
                <title>{title}</title>
            </Head>
            <Layout>
                <div className='flex h-full bg-gray-200 items-center justify-center'>
                    <form
                        onSubmit={handleQuery}
                        className='grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2'>
                        <div className='flex justify-center py-4'>
                            <div className='flex bg-purple-200 rounded-full border-2 border-purple-300'>
                                <Image
                                    className='rounded-full'
                                    src='/tbg.jpg'
                                    alt='Logo'
                                    height={48}
                                    width={48}
                                />
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <div className='flex'>
                                <h1 className='text-gray-600 font-bold md:text-2xl text-xl'>
                                    Sign Up!
                                </h1>
                            </div>
                        </div>

                        {showAlert && (
                            <div
                                className={`text-sm text-${alertColor}-600 border border-${alertColor}-400 h-12 flex items-center p-4 rounded-sm relative mt-5 mx-7`}
                                role='alert'>
                                {alertMessage}
                                <button
                                    type='button'
                                    data-dismiss='alert'
                                    aria-label='Close'
                                    onClick={() =>
                                        changeState<boolean>(
                                            setShowAlert,
                                            false
                                        )
                                    }>
                                    <span
                                        className='absolute top-0 bottom-0 right-0 text-2xl px-3 py-1 hover:text-red-900'
                                        aria-hidden='true'>
                                        ×
                                    </span>
                                </button>
                            </div>
                        )}

                        <div className='grid grid-cols-1 mt-5 mx-7'>
                            <label
                                htmlFor='email'
                                className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
                                Email
                            </label>
                            <input
                                required
                                className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                                type='email'
                                placeholder='Email'
                                name='email'
                                value={email}
                                onChange={(e) =>
                                    changeState<string | undefined>(
                                        setEmail,
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div className='grid grid-cols-1 mt-5 mx-7'>
                            <label
                                htmlFor='phone'
                                className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
                                Phone Number
                            </label>
                            <input
                                className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                                type='phone'
                                placeholder='Phone Number'
                                name='phone'
                                value={phone}
                                onChange={(e) =>
                                    changeState<string | undefined>(
                                        setPhone,
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
                            <div className='grid grid-cols-1'>
                                <label
                                    htmlFor='firstName'
                                    className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
                                    First Name
                                </label>
                                <input
                                    required
                                    className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                                    type='text'
                                    placeholder='First Name'
                                    name='firstName'
                                    value={firstName}
                                    onChange={(e) =>
                                        changeState<string | undefined>(
                                            setFirstName,
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className='grid grid-cols-1'>
                                <label
                                    htmlFor='lastName'
                                    className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
                                    Last Name
                                </label>
                                <input
                                    className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                                    type='text'
                                    placeholder='First Name'
                                    name='lastName'
                                    value={lastName}
                                    onChange={(e) =>
                                        changeState<string | undefined>(
                                            setLastName,
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 mt-5 mx-7'>
                            <label
                                htmlFor='timePref'
                                className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
                                Preferred Training Time
                            </label>
                            <select
                                name='timePref'
                                className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                                value={timePref}
                                onChange={(e) =>
                                    changeState<string | undefined>(
                                        setTimePref,
                                        e.target.value
                                    )
                                }>
                                <option value='Morning'>Morning</option>
                                <option value='Afternoon'>Afternoon</option>
                                <option value='Evening'>Evening</option>
                            </select>
                        </div>

                        <div className='grid grid-cols-1 mx-7 md:gap-8 gap-4 pt-5 pb-5'>
                            <button
                                type='submit'
                                className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default FreeOneToOne;
