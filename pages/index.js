import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';


function Titulo(props) {
        console.log(props);
        const Tag = props.tag || 'h1';
        return (
            <>
                <Tag>{props.children}</Tag>
                <style jsx>{`
                ${Tag} {
                color: ${appConfig.theme.colors.primary['901']};
                font-size: 40px;
                font-weight: 600;
                }
                `}</style>
            </>
        );
    }

// Componete React
//function HomePage() {
// JSX
//    return (
//        <div>
//            <GlobalStyle />
//            <Titulo tag="h2">Boas vindas de volta!</Titulo>
//            <h2>Discord - Alura Matrix xxx</h2>
//            
//        </div>
//    )
//}

//    export default HomePage

export default function PaginaInicial() {
  // const username = 'omariosouto';
  const [username, setUsername] = React.useState('');
  const roteamento = useRouter();
  const [showUserImage, setUserImage] = React.useState("none");

    return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[902],
          backgroundImage: 'url(https://cdn.ome.lt/jcA3r9wdtYdE7E1_785MeRoMv7A=/987x0/smart/uploads/conteudo/fotos/tanjiro-mugen-train-capa.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'row',
              sm: 'column',
            },
            width: '100%', maxWidth: '350px',
            borderRadius: '20px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[900],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log('Alguem submeteu o form');
              roteamento.push('/chat');

              // window.location.href = '/chat';
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '80%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">OtakuCord</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '25px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
              value={username}
              placeholder="Digite seu usuario Github"
              onChange={function (event) {
                console.log('usuario digitou', event.target.value);
                // Onde ta o valor?
                const valor = event.target.value
                if (valor.length > 2);
                // Trocar o valor da variavel
                // através do React e avise quem precisa
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[600],
                  mainColorHighlight: appConfig.theme.colors.primary[901],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["500"],
                mainColor: appConfig.theme.colors.primary[903],
                mainColorLight: appConfig.theme.colors.primary[900],
                mainColorStrong: appConfig.theme.colors.primary[901],
              }}
            />
          </Box>
          
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '210px',
              padding: '10px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '10px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '20px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image 
              styleSheet={{ 
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
            {username}
            
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}