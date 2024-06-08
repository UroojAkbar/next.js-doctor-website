'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bgColor={'black'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            {/* <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Freelance
            </Text> */}
            <br />{' '}
            <Text color={'white'} as={'span'}>
            Best Doctors of Pakistan
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
          Best Doctors of Pakistan Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            {/* <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button> */}
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://s3-alpha-sig.figma.com/img/4f75/15e0/926a5d71e9c8ed6fa2eeead9830ac7e3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QKycW5uE06eZ8k~bYxsTVDnm77Z6WN09cxdmELBxqadbYTsWuBBg72lKzKGSNEudJoxSZOOv~enKPEWP9DLFx6FeQE7rtb8d29rdrXg4pvc2n~ibM8kcI082HAJ-TRZuJv7xj6iV8jzW-kybVWHCfJYN0urZHjRvPDpVeTuj3eI61gHD7NE2UCc453efsOHFpEs1wUY36PKdFUwmpuVb9TD5JbUy2iHKzvDdoqAPy-KINET76TCBp75gYG~o0QkO26CmWQdimUXiy8pSvtHlhK9tjZ-yz5e531KjKcPavkq7w33EAY-0MV1RviBwhVWaJtuQiMSswTQ7mhgwX2vGkQ__'
          }
        />
      </Flex>
    </Stack>
  )
}