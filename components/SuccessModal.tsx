import { Fragment, useState, useRef } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

function SuccessModal() {
	const [open, setOpen] = useState(true);

	const cancelButtonRef = useRef(null);

	return (
		<div>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					initialFocus={cancelButtonRef}
					onClose={setOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
									<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
										<div className="sm:flex flex-col justify-center text-center ">
											{/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
												<ExclamationTriangleIcon
													className="h-6 w-6 text-red-600"
													aria-hidden="true"
												/>
											</div> */}
											<div className="mt-3 text-center sm:mt-0">
												<Dialog.Title
													as="h2"
													className="text-lg font-semibold leading-6 text-blue-500"
												>
													Congratulations
													<p className="text-sm text-gray-400">
														Your vendu account has been created successfully.
													</p>
												</Dialog.Title>
												<div className="mt-2"></div>
												<div className="mt-6">
													<p className="text-sm text-gray-700 font-bold">
														You are ready
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className=" px-4 py-3 ">
										<button
											type="button"
											onClick={() => setOpen(false)}
											className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
										>
											Continue to Dashboard
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
}

export default SuccessModal;
