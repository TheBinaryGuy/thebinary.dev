import { Layout, SEO } from '@/components/index';
import Head from 'next/head';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

type TimePrefs = 'Morning' | 'Afternoon' | 'Evening';

interface FormData {
    email: string;
    phone?: string;
    firstName: string;
    lastName: string;
    timePref: TimePrefs;
}

export type AlertColors =
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';

interface AlertData {
    showAlert: boolean;
    alertMessage: string;
    alertColor: AlertColors;
}

const FreeOneOnOneTraining = () => {
    const [title, setTitle] = useState('Free 1 on 1 Training | TheBinaryGuy');
    const [showSpinner, setShowSpinner] = useState(false);
    const [alertdata, setAlertData] = useState<AlertData>({
        showAlert: false,
        alertMessage: '',
        alertColor: 'red'
    });
    const [formData, setFormData] = useState<FormData>({
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        timePref: 'Morning'
    });

    const handleQuery = async (e: React.SyntheticEvent) => {
        setShowSpinner(true);
        e.preventDefault();
        try {
            const resp = await fetch('/api/query', {
                method: 'POST',
                body: JSON.stringify({
                    queryFor: 'Free One To One Training',
                    email: formData.email,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    queryDetails: {
                        phone: formData.phone,
                        timePref: formData.timePref
                    }
                })
            });

            if (!resp.ok) {
                setAlertData({
                    showAlert: true,
                    alertMessage:
                        'Something went wrong! Please try again later.',
                    alertColor: 'red'
                });
            } else {
                setAlertData({
                    showAlert: true,
                    alertMessage:
                        "Thank you for your interest, I'll get back to you shortly!",
                    alertColor: 'green'
                });
            }
        } catch {
            setAlertData({
                showAlert: true,
                alertMessage: 'Something went wrong!',
                alertColor: 'red'
            });
        } finally {
            setShowSpinner(false);
        }
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

                        {alertdata.showAlert && (
                            <div
                                className={`text-sm text-${alertdata.alertColor.toString()}-600 border border-${alertdata.alertColor.toString()}-400 h-12 flex items-center p-4 rounded-sm relative mt-5 mx-7`}
                                role='alert'>
                                {alertdata.alertMessage}
                                <button
                                    type='button'
                                    data-dismiss='alert'
                                    aria-label='Close'
                                    onClick={() =>
                                        setAlertData((prevAlertData) => ({
                                            ...prevAlertData,
                                            showAlert: false
                                        }))
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
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        email: e.target.value
                                    }))
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
                                value={formData.phone ?? ''}
                                onChange={(e) =>
                                    setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        phone: e.target.value
                                    }))
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
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData((prevFormData) => ({
                                            ...prevFormData,
                                            firstName: e.target.value
                                        }))
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
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData((prevFormData) => ({
                                            ...prevFormData,
                                            lastName: e.target.value
                                        }))
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
                                value={formData.timePref}
                                onChange={(e) =>
                                    setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        timePref: e.target.value as TimePrefs
                                    }))
                                }>
                                <option value='Morning'>Morning</option>
                                <option value='Afternoon'>Afternoon</option>
                                <option value='Evening'>Evening</option>
                            </select>
                        </div>

                        <div className='grid grid-cols-1 mx-7 md:gap-8 gap-4 pt-5 pb-5'>
                            {showSpinner && (
                                <div className='place-self-center'>
                                    <div
                                        style={{
                                            borderTopColor: 'transparent'
                                        }}
                                        className='border-solid animate-spin rounded-full border-purple-400 border-8 h-10 w-10'></div>
                                </div>
                            )}
                            <button
                                type='submit'
                                disabled={showSpinner}
                                className={`w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2 ${
                                    showSpinner ? 'cursor-not-allowed' : ''
                                } disabled:opacity-50`}>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default FreeOneOnOneTraining;
