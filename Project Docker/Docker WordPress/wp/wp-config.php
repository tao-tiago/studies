<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'wp_docker' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'wp_docker_user' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', 'wp_docker_password' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'wp_docker_mysql' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'P1R(HJld0a] |~6=Z1})gP&.4{Mmf)/Gzm*<[tWQS99%hfJ20DMs:zdBu;Z$O<k;' );
define( 'SECURE_AUTH_KEY',  'Yj{qM#SK_?qc.%Q8M@&lJ,~rirOY+DS|8+))80;PDTv8ihxmLUI?aO(My/bUm+<6' );
define( 'LOGGED_IN_KEY',    '{`9u]g:NF$Ike2GjVB`{uj*v/_w-8J3+xHIucoS}A[Ng8M~11M[x~V%U`:jic/^g' );
define( 'NONCE_KEY',        '|umY%yah*7V6xK<wNtj-*zG:j^yp(G@G5##/~?oSCY]:k> uop-sp{p^:;#3K;gn' );
define( 'AUTH_SALT',        '>wagpm2+jSq[g@HZH(<cJf-RQb{~YdDfp$/p#:~rpH,o/|-2<SeBnMb0)vjXU3BV' );
define( 'SECURE_AUTH_SALT', 'SHIK5U8x@I|a^BC-=Foyf(3;G^k[]=WRKY)9E0ttveu|E<Vl_*V:e_b#&Ej9t:?*' );
define( 'LOGGED_IN_SALT',   'C{-U5-%R:]92Gub]:ph)fR5m W;nwLigs@Cp9_lMrapupc[itxsc=ttw2e.WEkmd' );
define( 'NONCE_SALT',       ')+OwZb%hlJf@w?D~G^HNIDQ0QB=j&/+3qKwMTM;JddR|0$SQYa&Z=aA-IO+OG*%+' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
